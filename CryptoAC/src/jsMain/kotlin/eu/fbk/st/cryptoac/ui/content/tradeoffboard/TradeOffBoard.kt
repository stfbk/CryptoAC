package eu.fbk.st.cryptoac.ui.content.tradeoffboard

import eu.fbk.st.cryptoac.ui.content.tradeoffboard.Assignment.Companion.assignmentsCLOUD
import eu.fbk.st.cryptoac.ui.content.tradeoffboard.Assignment.Companion.assignmentsMQTT
import kotlinx.css.*
import mu.KotlinLogging
import react.*
import react.dom.attrs
import react.dom.br
import styled.css
import styled.styledDiv

private val logger = KotlinLogging.logger {}

external interface TradeOffBoardState : State {
    /** The currently selected scenario */
    var scenario: Scenario

    /** The currently selected algorithm */
    var algorithm: Algorithm

    /** The currently selected metric */
    var metric: Metric

    /** Whether to show hybrid architectures or not */
    var hybrid: Boolean

    /** The domains of the current scenario */
    var domains: List<String>

    /** The entities of the current scenario */
    var entities: List<String>

    /** The attackers of the current scenario */
    var attackers: LinkedHashMap<String, MutableList<Attacker>>

    /** The possible assignments of domain-(list of entities) of the current scenario */
    var assignments: HashMap<String, List<String>>

    /** The candidate architectures of the current scenario */
    var architectures: List<Architecture>

    /** The list of (either security or performance) requirements of the current scenario */
    var requirementsInputs: List<Requirement>

    /** The impact of assignments on each performance requirement of the current scenario */
    var performanceRequirementsImpact: HashMap<String, HashMap<Assignment, Int>>

    /** The impact of targets on each security requirement of the current scenario */
    var securityRequirementsImpact: HashMap<SecurityRequirements, HashMap<String, Impact>>

    /** The allowed (i.e., the complement of pre-filters) assignments of domain-(list of entities) of the current scenario */
    var allowedAssignments: HashMap<String, MutableList<String>>
}

/**
 * The TradeOffBoard React component, consisting of:
 * 1. The "Configuration" tab;
 * 2. The "Pre-Filters" tab;
 * 3. The "Trust Assumptions" tab;
 * 4. The "Scenario Requirements" or the "Security Requirements" tab (only if AdHoc algorithm is chosen);
 * 5. The "Best Architectures" tab;
 */
class TradeOffBoard: RComponent<Props, TradeOffBoardState>() {

    override fun RBuilder.render() {
        styledDiv {
            css {
                textAlign = TextAlign.center
                marginTop = 10.px
                paddingBottom = 10.px
            }


            child(configuration {
                attrs {
                    handleChangeScenario = { newScenario -> changeScenario(newScenario) }
                    handleChangeAlgorithm = { newAlgorithm -> changeAlgorithm(newAlgorithm) }
                    handleChangeMetric = { newMetric -> changeMetric(newMetric) }
                }
            })


            br {  }


            child(preFilters {
                attrs {
                    domains = state.domains
                    entities = state.entities
                    assignments = state.assignments
                    handleToggleAssignment =  { entity, domain, accepted ->
                        toggleAssignment(entity, domain, accepted)
                    }
                    handleToggleHybrid = { newValue ->
                        toggleHybrid(newValue)
                    }
                }
            })


            br {  }


            child(trustAssumptions {
                attackers =  state.attackers
                handleChangeLikelihood = { domain, attacker, newLikelihood ->
                    changeLikelihood(domain, attacker, newLikelihood)
                }
            })


            br {  }


            if (state.algorithm == Algorithm.AdHoc) {

                child(requirements {
                    title = when (state.metric) {
                        Metric.Protection -> "Security Requirements"
                        Metric.Goals -> "Scenario Requirements"
                    }
                    requirements = state.requirementsInputs
                    handleChangeWeightValue = { requirement, weight -> changeWeight(requirement, weight) }
                    handleChangeThresholdType = { requirement, threshold -> changeThresholdType(requirement, threshold) }
                    handleChangeThresholdValue = { requirement, value -> changeThresholdValue(requirement, value) }
                    handleChangePenaltyValue = { requirement, penalty -> changePenalty(requirement, penalty) }
                })

                br { }
            }


            child(bestArchitectures {
                attrs {
                    algorithm = state.algorithm
                    scenario = state.scenario
                    domains = state.domains
                    hybrid = state.hybrid
                    architectures =  state.architectures
                    refreshBestArchitectures = { _ ->
                        setState { architectures = computePossibleArchitectures() }
                    }
                }
            })
        }
    }



    private fun changePenalty(requirement: String, penalty: Int) {
        console.log("changePenalty, requirement $requirement, penalty $penalty")
        setState {
            requirementsInputs.first { it.name == requirement }.penalty = penalty
        }
    }

    private fun changeThresholdValue(requirement: String, value: Int) {
        console.log("changeThresholdValue, requirement $requirement, value $value")
        setState {
            requirementsInputs.first { it.name == requirement }.thresholdValue = value
        }
    }

    private fun changeThresholdType(requirement: String, threshold: Threshold) {
        console.log("changeThresholdType, requirement $requirement, threshold $threshold")
        setState {
            requirementsInputs.first { it.name == requirement }.thresholdType = threshold
        }
    }

    private fun changeWeight(requirement: String, weight: Int) {
        console.log("changeWeight, requirement $requirement, weight $weight")
        setState {
            requirementsInputs.first { it.name == requirement }.weight = weight
        }
    }

    private fun changeLikelihood(domain: String, attacker: Attackers, newLikelihood: Likelihood) {
        logger.info { "changeLikelihood, domain $domain, attacker $attacker, newLikelihood $newLikelihood" }
        setState {
            attackers[domain]!!.first { it.attacker == attacker }.likelihood = newLikelihood
        }
    }

    private fun changeAlgorithm(newAlgorithm: Algorithm) {
        logger.info { "Changing the 'algorithm' state to $newAlgorithm" }
        setState {
            algorithm = newAlgorithm
        }
    }

    private fun changeMetric(newMetric: Metric) {
        logger.info { "Changing the 'metric' state to $newMetric" }
        setState {
            metric = newMetric
            if (scenario == Scenario.CLOUD) {
                requirementsInputs = when (newMetric) {
                    Metric.Protection -> SecurityRequirements.values().map { Requirement(it.toString()) }
                    Metric.Goals -> ScenarioRequirementsCLOUD.values().map { Requirement(it.toString()) }
                }
                performanceRequirementsImpact = copyPerformanceImpact(scenarioRequirementsCLOUDImpact)
                securityRequirementsImpact = copySecurityImpact(securityRequirementsCLOUDImpact)
            } else if (scenario == Scenario.MQTT) {
                requirementsInputs = when (newMetric) {
                    Metric.Protection -> SecurityRequirements.values().map { Requirement(it.toString()) }
                    Metric.Goals -> ScenarioRequirementsMQTT.values().map { Requirement(it.toString()) }
                }
                performanceRequirementsImpact = copyPerformanceImpact(scenarioRequirementsMQTTImpact)
                securityRequirementsImpact = copySecurityImpact(securityRequirementsMQTTImpact)
            }
        }
    }



    private fun toggleAssignment(entity: String, domain: String, accepted: Boolean) {
        console.log("toggleAssignment, entity $entity, domain $domain, accepted $accepted")
        setState {
            if (accepted) {
                allowedAssignments[domain]!!.add(entity)
            } else {
                allowedAssignments[domain]!!.remove(entity)
            }
        }
    }

    private fun toggleHybrid(newValue: Boolean) {
        console.log("toggleHybrid, newValue $newValue")
        setState {
            hybrid = newValue
        }
    }

    private fun changeScenario(newScenario: Scenario) {
        logger.info { "Changing the 'scenario' state to $newScenario" }
        setState {
            scenario = newScenario
            if (scenario == Scenario.CLOUD) {
                allowedAssignments = copyAssignments(assignmentsCLOUD)
                performanceRequirementsImpact = copyPerformanceImpact(scenarioRequirementsCLOUDImpact)
                securityRequirementsImpact = copySecurityImpact(securityRequirementsCLOUDImpact)
                domains = DomainsCLOUD.values().map { it.toString() }
                entities = EntitiesCLOUD.values().map { it.toString() }
                assignments = assignmentsCLOUD
                attackers = copyAttackers(attackersCLOUD)
                requirementsInputs = when (state.metric) {
                    Metric.Protection -> SecurityRequirements.values().map { Requirement(it.toString()) }
                    Metric.Goals -> ScenarioRequirementsCLOUD.values().map { Requirement(it.toString()) }
                }
            } else if (scenario == Scenario.MQTT) {
                allowedAssignments = copyAssignments(assignmentsMQTT)
                requirementsInputs = ScenarioRequirementsMQTT.values().map { Requirement(it.toString()) }
                performanceRequirementsImpact = copyPerformanceImpact(scenarioRequirementsMQTTImpact)
                securityRequirementsImpact = copySecurityImpact(securityRequirementsMQTTImpact)
                domains = DomainsMQTT.values().map { it.toString() }
                entities = EntitiesMQTT.values().map { it.toString() }
                assignments = assignmentsMQTT
                attackers =  copyAttackers(attackersMQTT)
                requirementsInputs = when (state.metric) {
                    Metric.Protection -> SecurityRequirements.values().map { Requirement(it.toString()) }
                    Metric.Goals -> ScenarioRequirementsMQTT.values().map { Requirement(it.toString()) }
                }
            }
        }
    }



    private fun copyAttackers(attackers: LinkedHashMap<String, List<Attacker>>): LinkedHashMap<String, MutableList<Attacker>> {
        val returnValue: LinkedHashMap<String, MutableList<Attacker>> = linkedMapOf()
        attackers.forEach {
            returnValue[it.key] = mutableListOf()
            it.value.forEach { attacker ->
                returnValue[it.key]!!.add(Attacker(attacker = attacker.attacker, likelihood =  attacker.likelihood))
            }
        }
        return returnValue
    }

    private fun copyAssignments(assignments: HashMap<String, List<String>>): HashMap<String, MutableList<String>> {
        val returnValue: HashMap<String, MutableList<String>> = hashMapOf()
        assignments.forEach {
            returnValue[it.key] = mutableListOf()
            it.value.forEach { entity ->
                returnValue[it.key]!!.add(entity)
            }
        }
        return returnValue
    }

    private fun copyPerformanceImpact(impact: HashMap<String, HashMap<Assignment, Int>>): HashMap<String, HashMap<Assignment, Int>> {
        val returnValue: HashMap<String, HashMap<Assignment, Int>> = hashMapOf()
        impact.forEach { requirement ->
            returnValue[requirement.key] = hashMapOf()
            requirement.value.forEach { assignmentImpact ->
                returnValue[requirement.key]!![Assignment(assignmentImpact.key.domain, assignmentImpact.key.entity)] = assignmentImpact.value
            }
        }
        return returnValue
    }

    private fun copySecurityImpact(impact: HashMap<SecurityRequirements, HashMap<String, Impact>>): HashMap<SecurityRequirements, HashMap<String, Impact>> {
        val returnValue: HashMap<SecurityRequirements, HashMap<String, Impact>> = hashMapOf()
        impact.forEach { requirement ->
            returnValue[requirement.key] = hashMapOf()
            requirement.value.forEach { targetAndImpact ->
                returnValue[requirement.key]!![targetAndImpact.key] = targetAndImpact.value
            }
        }
        return returnValue
    }




    private fun computePossibleArchitectures(): List<Architecture> {

        if (state == undefined) {
            logger.info { "computePossibleArchitectures, but state is undefined" }
            return listOf()
        }

        logger.info { "computePossibleArchitectures, scenario ${state.scenario}, algorithm ${state.algorithm}, metric ${state.metric}" }

        logger.info { "Derive the list of possible assignments in the form of <domain, entity> tuples" }
        val possibleAssignments: MutableList<Assignment> = mutableListOf()
        val possibleEntities: HashSet<String> = hashSetOf()
        state.allowedAssignments.forEach { entry ->
            entry.value.forEach { entity ->
                possibleAssignments.add(Assignment(entry.key, entity))
                possibleEntities.add(entity)
            }
        }

        logger.info { "Compute the power set of possible assignments, so to have all possible architectures" }
        val assignmentsPowerSet = possibleAssignments.powerSet()

        logger.info { "Compute the score of each architecture for each (security or performance) requirement" }
        val architectures: MutableList<Architecture> = mutableListOf()
        assignmentsPowerSet.forEach { currentArchitecture ->
            val entitiesInThisArchitecture = currentArchitecture.map { it.entity }
            if (entitiesInThisArchitecture.containsAll(possibleEntities)) {

                val architecture = Architecture.architectureFromAssignments(currentArchitecture.toList())
                //logger.info { "Current architecture is $architecture" }

                //logger.info { "Aggregating the contribution of each Assignment for each Requirement" }
                val scoresArray = computeScoresArray(currentArchitecture)



                var excludeArchitecture = false
                if (state.algorithm == Algorithm.AdHoc) {
                    //logger.info { "As algorithm is AdHoc, apply the weights, thresholds and penalty" }
                    var finalScore = 0
                    scoresArray.forEach { entry ->
                        val requirementName = entry.key
                        //logger.info { "Requirement is $requirementName" }
                        var tempScore = entry.value
                        val requirement = state.requirementsInputs.first { it.name == requirementName }
                        when (requirement.thresholdType) {
                            Threshold.None -> { }
                            Threshold.Soft -> if (tempScore < requirement.thresholdValue) {
                                tempScore -= requirement.penalty
                            }
                            Threshold.Hard -> if (tempScore < requirement.thresholdValue) {
                                excludeArchitecture = true
                            }
                        }
                        finalScore += tempScore
                    }
                    architecture.requirementsScore = finalScore
                } else if (state.algorithm == Algorithm.Best) {
                    architecture.arrayRequirementsScore = scoresArray
                }

                if (!excludeArchitecture) {
                    architectures.add(architecture)
                }
            }
        }

        logger.info { "There are ${architectures.size} architectures" }

        return if (architectures.size != 0) {
            orderArchitectures(architectures)
        } else {
            architectures
        }
    }

    private fun computeScoresArray(currentArchitecture: Set<Assignment>): HashMap<String, Int> {
        val scoresArray: HashMap<String, Int> = hashMapOf()

        if (state.metric == Metric.Goals) {
            state.performanceRequirementsImpact.forEach { entry ->
                val requirementName = entry.key
                //logger.info { "Requirement is $requirementName" }
                var score = 0
                val assignmentsAndImpact = entry.value
                currentArchitecture.forEach { assignment ->
                    //logger.info { "Assignment is $assignment" }
                    val requirement = state.requirementsInputs.first { it.name == requirementName }
                    score += (assignmentsAndImpact[assignment]!! * (
                        if (state.algorithm == Algorithm.AdHoc) {
                            requirement.weight
                        } else {
                            1
                        }
                    ))
                }
                scoresArray[requirementName] = score
            }
        } else if (state.metric == Metric.Protection) {
            state.securityRequirementsImpact.forEach { securityRequirementImpact ->
                val requirementName = securityRequirementImpact.key.toString()
                //logger.info { "Requirement is $requirementName" }
                var score = 3
                val targetAndImpact = securityRequirementImpact.value
                state.attackers.forEach { domainAndAttackers ->
                    val domain = domainAndAttackers.key
                    val attackers = domainAndAttackers.value

                    attackers.forEach { attacker ->

                        /** The attackers operate in a single domain */
                        if (state.domains.contains(domain)) {
                            /** For each entity in that domain */
                            currentArchitecture.filter { it.domain == domain }.forEach {
                                val entityInDomain = it.entity

                                /** The attacker threatens that entity */
                                score = minOf(
                                    score,
                                    getProtectionLevel(targetAndImpact[entityInDomain]!!, attacker.likelihood)
                                )
                            }
                        }
                        /** The attackers operate in a communication channel between two domains */
                        else {
                            val firstDomain = domain.split("_")[0]
                            val secondDomain = domain.split("_")[1]

                            val entitiesInFirstDomain = mutableListOf<String>()
                            val entitiesInSecondDomain = mutableListOf<String>()
                            currentArchitecture.forEach {
                                if (it.domain == firstDomain) {
                                    entitiesInFirstDomain.add(it.entity)
                                } else if (it.domain == secondDomain) {
                                    entitiesInSecondDomain.add(it.entity)
                                }
                            }

                            entitiesInFirstDomain.forEach { firstEntity ->
                                entitiesInSecondDomain.forEach { secondEntity ->

                                    var eventualImpact = targetAndImpact["${firstEntity}_${secondEntity}"]
                                    if (eventualImpact == null) {
                                        eventualImpact = targetAndImpact["${secondEntity}_${firstEntity}"]
                                    }

                                    if (eventualImpact != null) {
                                        /** The attacker threatens the communication channel between the two entities */
                                        score = minOf(
                                            score,
                                            getProtectionLevel(eventualImpact, attacker.likelihood)
                                        )
                                    }
                                }
                            }
                        }
                    }
                }
                scoresArray[requirementName] = score * (
                    if (state.algorithm == Algorithm.AdHoc) {
                        state.requirementsInputs.first { it.name == requirementName }.weight
                    } else {
                        1
                    }
                )
            }
        }

        return scoresArray
    }

    private fun getProtectionLevel(impact: Impact, likelihood: Likelihood): Int {
        return if (impact == Impact.None || likelihood == Likelihood.None) {
            3
        } else if (impact == Impact.Low || likelihood == Likelihood.Low) {
            2
        } else if (impact == Impact.Medium || likelihood == Likelihood.Medium) {
            1
        } else {
            0
        }
    }

    private fun orderArchitectures(possibleArchitectures: MutableList<Architecture>) : MutableList<Architecture> {

        logger.info { "${possibleArchitectures.size} architectures are being ordered" }

        return when (state.algorithm) {
            Algorithm.AdHoc -> {
                possibleArchitectures.sortedByDescending { it.requirementsScore }.toMutableList()
            }
            Algorithm.Best -> {

                /** Find the optimal */
                var currentOptimal = possibleArchitectures.first()
                possibleArchitectures.forEach { currentArchitecture ->
                    if (dominates(currentArchitecture.arrayRequirementsScore, currentOptimal.arrayRequirementsScore)) {
                        currentOptimal = currentArchitecture
                    }
                }

                /** Remove dominated architectures */
                val iterator = possibleArchitectures.iterator()
                while (iterator.hasNext()) {
                    val currentArchitecture = iterator.next()
                    if (dominates(currentOptimal.arrayRequirementsScore, currentArchitecture.arrayRequirementsScore)) {
                        iterator.remove()
                    }
                }
                logger.info { "${possibleArchitectures.size} architectures are optimal" }
                possibleArchitectures
            }
        }
    }

    private fun dominates(dominator: HashMap<String, Int>, dominatee: HashMap<String, Int>): Boolean {
        var dominate = true
        var majorInAtLeastOne = false
        dominator.forEach {
            if (dominatee[it.key]!! > it.value ) {
                dominate = false
            }
            if (it.value > dominatee[it.key]!!) {
                majorInAtLeastOne = true
            }
        }
        return dominate && majorInAtLeastOne
    }


    override fun TradeOffBoardState.init() {
        logger.info { "Initializing the state of the TradeOffBoard component" }
        algorithm = Algorithm.Best
        scenario = Scenario.CLOUD
        metric = Metric.Goals
        hybrid = false

        domains = DomainsCLOUD.values().map { it.toString() }
        entities = EntitiesCLOUD.values().map { it.toString() }
        attackers =  copyAttackers(attackersCLOUD)
        assignments = assignmentsCLOUD

        allowedAssignments = copyAssignments(assignmentsCLOUD)
        requirementsInputs = ScenarioRequirementsCLOUD.values().map { Requirement(it.toString()) }
        performanceRequirementsImpact = copyPerformanceImpact(scenarioRequirementsCLOUDImpact)
        securityRequirementsImpact = copySecurityImpact(securityRequirementsCLOUDImpact)

        architectures = computePossibleArchitectures()
    }


}

fun tradeOffBoard(handler: Props.() -> Unit): ReactElement {
    return createElement {
        child(TradeOffBoard::class) {
            this.attrs(handler)
        }
    }!!
}

// TODO doc below
enum class Scenario {
    CLOUD, MQTT
}
enum class Algorithm {
    Best, AdHoc
}
enum class Metric {
    Goals, Protection
}

enum class DomainsCLOUD {
    Client, OnPremise, CSP
}
enum class EntitiesCLOUD {
    Proxy, RM, MM, DM
}

enum class DomainsMQTT {
    Client, OnPremise, Edge, CSP
}
enum class EntitiesMQTT {
    Proxy, MM, DM
}

enum class Attackers {
    MitM, Insider, MatD
}
enum class Likelihood {
    High, Medium, Low, None
}
enum class Impact {
    High, Medium, Low, None
}

val attackersCLOUD = linkedMapOf(
    DomainsCLOUD.Client.toString() to listOf(Attacker(Attackers.MatD)),
    DomainsCLOUD.OnPremise.toString() to listOf(Attacker(Attackers.Insider)),
    DomainsCLOUD.CSP.toString() to listOf(Attacker(Attackers.Insider)),
    "${DomainsCLOUD.Client}_${DomainsCLOUD.OnPremise}" to listOf(Attacker(Attackers.MitM)),
    "${DomainsCLOUD.OnPremise}_${DomainsCLOUD.CSP}" to listOf(Attacker(Attackers.MitM)),
    "${DomainsCLOUD.Client}_${DomainsCLOUD.CSP}" to listOf(Attacker(Attackers.MitM)),
)
val attackersMQTT = linkedMapOf(
    DomainsMQTT.Client.toString() to listOf(Attacker(Attackers.MatD)),
    DomainsMQTT.OnPremise.toString() to listOf(Attacker(Attackers.Insider)),
    DomainsMQTT.CSP.toString() to listOf(Attacker(Attackers.Insider)),
    "${DomainsMQTT.Client}_${DomainsMQTT.OnPremise}" to listOf(Attacker(Attackers.MitM)),
    "${DomainsMQTT.OnPremise}_${DomainsMQTT.CSP}" to listOf(Attacker(Attackers.MitM)),
    "${DomainsMQTT.Client}_${DomainsMQTT.CSP}" to listOf(Attacker(Attackers.MitM)),
)


enum class Threshold {
    None, Soft, Hard
}
enum class SecurityRequirements {
    Confidentiality, Integrity, Availability
}
enum class ScenarioRequirementsCLOUD {
    Redundancy, Scalability, Reliability, Maintenance, DoS_Resilience, Vendor_Lock_in, On_premise_Savings, CSP_Savings
}
enum class ScenarioRequirementsMQTT {
    Redundancy, Scalability, Reliability, Maintenance, DoS_Resilience, Vendor_Lock_in, On_premise_Savings, CSP_Savings, Latency, Throughput
}

val scenarioRequirementsCLOUDImpact: HashMap<String, HashMap<Assignment, Int>> = hashMapOf(
    ScenarioRequirementsCLOUD.Redundancy.toString() to hashMapOf(
        Assignment(DomainsCLOUD.Client.toString(), EntitiesCLOUD.Proxy.toString()) to 0,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.Proxy.toString()) to 0,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.RM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.RM.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.MM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.MM.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.DM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.DM.toString()) to +1,
    ),
    ScenarioRequirementsCLOUD.Scalability.toString() to hashMapOf(
        Assignment(DomainsCLOUD.Client.toString(), EntitiesCLOUD.Proxy.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.Proxy.toString()) to -1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.RM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.RM.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.MM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.MM.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.DM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.DM.toString()) to +1,
    ),
    ScenarioRequirementsCLOUD.Reliability.toString() to hashMapOf(
        Assignment(DomainsCLOUD.Client.toString(), EntitiesCLOUD.Proxy.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.Proxy.toString()) to -1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.RM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.RM.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.MM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.MM.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.DM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.DM.toString()) to +1,
    ),
    ScenarioRequirementsCLOUD.Maintenance.toString() to hashMapOf(
        Assignment(DomainsCLOUD.Client.toString(), EntitiesCLOUD.Proxy.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.Proxy.toString()) to -1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.RM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.RM.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.MM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.MM.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.DM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.DM.toString()) to +1,
    ),
    ScenarioRequirementsCLOUD.DoS_Resilience.toString() to hashMapOf(
        Assignment(DomainsCLOUD.Client.toString(), EntitiesCLOUD.Proxy.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.Proxy.toString()) to -1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.RM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.RM.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.MM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.MM.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.DM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.DM.toString()) to +1,
    ),
    ScenarioRequirementsCLOUD.On_premise_Savings.toString() to hashMapOf(
        Assignment(DomainsCLOUD.Client.toString(), EntitiesCLOUD.Proxy.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.Proxy.toString()) to -1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.RM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.RM.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.MM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.MM.toString()) to +1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.DM.toString()) to -1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.DM.toString()) to +1,
    ),
    ScenarioRequirementsCLOUD.Vendor_Lock_in.toString() to hashMapOf(
        Assignment(DomainsCLOUD.Client.toString(), EntitiesCLOUD.Proxy.toString()) to 0,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.Proxy.toString()) to 0,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.RM.toString()) to +1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.RM.toString()) to -1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.MM.toString()) to +1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.MM.toString()) to -1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.DM.toString()) to +1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.DM.toString()) to -1,
    ),
    ScenarioRequirementsCLOUD.CSP_Savings.toString() to hashMapOf(
        Assignment(DomainsCLOUD.Client.toString(), EntitiesCLOUD.Proxy.toString()) to 0,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.Proxy.toString()) to 0,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.RM.toString()) to +1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.RM.toString()) to -1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.MM.toString()) to +1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.MM.toString()) to -1,
        Assignment(DomainsCLOUD.OnPremise.toString(), EntitiesCLOUD.DM.toString()) to +1,
        Assignment(DomainsCLOUD.CSP.toString(), EntitiesCLOUD.DM.toString()) to -1,
    ),
)
val scenarioRequirementsMQTTImpact: HashMap<String, HashMap<Assignment, Int>> = hashMapOf(
    ScenarioRequirementsMQTT.Redundancy.toString() to hashMapOf(
        Assignment(DomainsMQTT.Client.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.MM.toString()) to -1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.MM.toString()) to +1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.DM.toString()) to -1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.DM.toString()) to +1,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.MM.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.DM.toString()) to 0,
    ),
    ScenarioRequirementsMQTT.Scalability.toString() to hashMapOf(
        Assignment(DomainsMQTT.Client.toString(), EntitiesMQTT.Proxy.toString()) to +1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.Proxy.toString()) to -1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.MM.toString()) to -1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.MM.toString()) to +1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.DM.toString()) to -1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.DM.toString()) to +1,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.MM.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.DM.toString()) to 0,
    ),
    ScenarioRequirementsMQTT.Reliability.toString() to hashMapOf(
        Assignment(DomainsMQTT.Client.toString(), EntitiesMQTT.Proxy.toString()) to +1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.Proxy.toString()) to -1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.MM.toString()) to -1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.MM.toString()) to +1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.DM.toString()) to -1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.DM.toString()) to +1,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.MM.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.DM.toString()) to 0,
    ),
    ScenarioRequirementsMQTT.Maintenance.toString() to hashMapOf(
        Assignment(DomainsMQTT.Client.toString(), EntitiesMQTT.Proxy.toString()) to +1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.Proxy.toString()) to -1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.MM.toString()) to -1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.MM.toString()) to +1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.DM.toString()) to -1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.DM.toString()) to +1,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.MM.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.DM.toString()) to 0,
    ),
    ScenarioRequirementsMQTT.DoS_Resilience.toString() to hashMapOf(
        Assignment(DomainsMQTT.Client.toString(), EntitiesMQTT.Proxy.toString()) to +1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.Proxy.toString()) to -1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.MM.toString()) to -1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.MM.toString()) to +1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.DM.toString()) to -1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.DM.toString()) to +1,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.MM.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.DM.toString()) to 0,
    ),
    ScenarioRequirementsMQTT.On_premise_Savings.toString() to hashMapOf(
        Assignment(DomainsMQTT.Client.toString(), EntitiesMQTT.Proxy.toString()) to +1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.Proxy.toString()) to -1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.MM.toString()) to -1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.MM.toString()) to +1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.DM.toString()) to -1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.DM.toString()) to +1,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.MM.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.DM.toString()) to 0,
    ),
    ScenarioRequirementsMQTT.Vendor_Lock_in.toString() to hashMapOf(
        Assignment(DomainsMQTT.Client.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.MM.toString()) to +1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.MM.toString()) to -1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.DM.toString()) to +1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.DM.toString()) to -1,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.MM.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.DM.toString()) to 0,
    ),
    ScenarioRequirementsMQTT.CSP_Savings.toString() to hashMapOf(
        Assignment(DomainsMQTT.Client.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.MM.toString()) to +1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.MM.toString()) to -1,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.DM.toString()) to +1,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.DM.toString()) to -1,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.MM.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.DM.toString()) to 0,
    ),
    ScenarioRequirementsMQTT.Latency.toString() to hashMapOf(
        Assignment(DomainsMQTT.Client.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.MM.toString()) to 0,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.MM.toString()) to 0,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.DM.toString()) to 0,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.DM.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.MM.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.DM.toString()) to 0,
    ),
    ScenarioRequirementsMQTT.Throughput.toString() to hashMapOf(
        Assignment(DomainsMQTT.Client.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.MM.toString()) to 0,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.MM.toString()) to 0,
        Assignment(DomainsMQTT.OnPremise.toString(), EntitiesMQTT.DM.toString()) to 0,
        Assignment(DomainsMQTT.CSP.toString(), EntitiesMQTT.DM.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.Proxy.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.MM.toString()) to 0,
        Assignment(DomainsMQTT.Edge.toString(), EntitiesMQTT.DM.toString()) to 0,
    ),
)


val securityRequirementsCLOUDImpact: HashMap<SecurityRequirements, HashMap<String, Impact>> = hashMapOf(
    SecurityRequirements.Confidentiality to hashMapOf(
        EntitiesCLOUD.Proxy.toString() to Impact.High,
        EntitiesCLOUD.RM.toString() to Impact.None,
        EntitiesCLOUD.MM.toString() to Impact.None,
        EntitiesCLOUD.DM.toString() to Impact.None,
        "${EntitiesCLOUD.Proxy}_${EntitiesCLOUD.RM}" to Impact.None, // TODO
        "${EntitiesCLOUD.Proxy}_${EntitiesCLOUD.MM}" to Impact.None,
        "${EntitiesCLOUD.Proxy}_${EntitiesCLOUD.DM}" to Impact.None,
        "${EntitiesCLOUD.RM}_${EntitiesCLOUD.MM}" to Impact.None,
        "${EntitiesCLOUD.RM}_${EntitiesCLOUD.DM}" to Impact.None,
    ),
    SecurityRequirements.Integrity to hashMapOf(
        EntitiesCLOUD.Proxy.toString() to Impact.High,
        EntitiesCLOUD.RM.toString() to Impact.High,
        EntitiesCLOUD.MM.toString() to Impact.High,
        EntitiesCLOUD.DM.toString() to Impact.Low,
        "${EntitiesCLOUD.Proxy}_${EntitiesCLOUD.RM}" to Impact.None, // TODO
        "${EntitiesCLOUD.Proxy}_${EntitiesCLOUD.MM}" to Impact.High,
        "${EntitiesCLOUD.Proxy}_${EntitiesCLOUD.DM}" to Impact.Low,
        "${EntitiesCLOUD.RM}_${EntitiesCLOUD.MM}" to Impact.High,
        "${EntitiesCLOUD.RM}_${EntitiesCLOUD.DM}" to Impact.Low,
    ),
    SecurityRequirements.Availability to hashMapOf(
        EntitiesCLOUD.Proxy.toString() to Impact.None,
        EntitiesCLOUD.RM.toString() to Impact.None,
        EntitiesCLOUD.MM.toString() to Impact.None,
        EntitiesCLOUD.DM.toString() to Impact.Low,
        "${EntitiesCLOUD.Proxy}_${EntitiesCLOUD.RM}" to Impact.None, // TODO
        "${EntitiesCLOUD.Proxy}_${EntitiesCLOUD.MM}" to Impact.None,
        "${EntitiesCLOUD.Proxy}_${EntitiesCLOUD.DM}" to Impact.None,
        "${EntitiesCLOUD.RM}_${EntitiesCLOUD.MM}" to Impact.None,
        "${EntitiesCLOUD.RM}_${EntitiesCLOUD.DM}" to Impact.None,
    ),
)

val securityRequirementsMQTTImpact: HashMap<SecurityRequirements, HashMap<String, Impact>> = hashMapOf(
    SecurityRequirements.Confidentiality to hashMapOf(
        EntitiesMQTT.Proxy.toString() to Impact.High,
        EntitiesMQTT.MM.toString() to Impact.None,
        EntitiesMQTT.DM.toString() to Impact.None,
        "${EntitiesMQTT.Proxy}_${EntitiesMQTT.MM}" to Impact.None,
        "${EntitiesMQTT.Proxy}_${EntitiesMQTT.DM}" to Impact.None,
    ),
    SecurityRequirements.Integrity to hashMapOf(
        EntitiesMQTT.Proxy.toString() to Impact.High,
        EntitiesMQTT.MM.toString() to Impact.High,
        EntitiesMQTT.DM.toString() to Impact.Low,
        "${EntitiesMQTT.Proxy}_${EntitiesMQTT.MM}" to Impact.High,
        "${EntitiesMQTT.Proxy}_${EntitiesMQTT.DM}" to Impact.Low,
    ),
    SecurityRequirements.Availability to hashMapOf(
        EntitiesMQTT.Proxy.toString() to Impact.None,
        EntitiesMQTT.MM.toString() to Impact.None,
        EntitiesMQTT.DM.toString() to Impact.Low,
        "${EntitiesMQTT.Proxy}_${EntitiesMQTT.MM}" to Impact.None,
        "${EntitiesMQTT.Proxy}_${EntitiesMQTT.DM}" to Impact.None,
    ),
)

fun getImageFromEntity(entity: String) = when (entity) {
    EntitiesCLOUD.Proxy.toString(), EntitiesMQTT.Proxy.toString() -> "proxy.png"
    EntitiesCLOUD.RM.toString() -> "rm.png"
    EntitiesCLOUD.MM.toString(), EntitiesMQTT.MM.toString() -> "mm.png"
    EntitiesCLOUD.DM.toString(), EntitiesMQTT.DM.toString() -> "dm.png"
    else -> throw Exception("error todo fix this, entity does not have image")
}



