package eu.fbk.st.cryptoac.view.content.tradeoffboard

import csstype.*
import emotion.react.css
import eu.fbk.st.cryptoac.view.Themes.plainPaperTitleStyle
import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.icons.faUndoAlt
import eu.fbk.st.cryptoac.view.components.materialui.grid
import eu.fbk.st.cryptoac.view.components.materialui.iconButton
import eu.fbk.st.cryptoac.view.components.materialui.tooltip
import mu.KotlinLogging
import react.*
import react.dom.html.ReactHTML.br
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.span
import react.dom.html.ReactHTML.table
import react.dom.html.ReactHTML.tbody
import react.dom.html.ReactHTML.td
import react.dom.html.ReactHTML.thead
import react.dom.html.ReactHTML.tr

private val logger = KotlinLogging.logger {}

// TODO doc
external interface TradeOffBoardProps : Props {
    var handleChangeCircularProgressValueProp: (Int) -> Unit
    var handleChangeBackdropIsOpenProp: (Boolean) -> Unit
    var scenarioProp: Scenario
    var algorithmProp: Algorithm
    var objectiveProp: Objective
}


data class TradeOffBoardState(
    /** The entity-domain assignments to be excluded from architectures  */
    var prefiltersState: MutableList<Assignment> = mutableListOf(),

    /** The minimum and maximum number of domains an entity can be assigned to in the same architecture */
    var replicationIntervalState: LinkedHashMap<Entities, Pair<Int, Int>> = LinkedHashMap(
        Entities.values().associateWith { (1 to 1) }
    ),

    /** The candidate architectures */
    var optimalArchitecturesState: List<Architecture> = listOf(),

    /** The weight, threshold (type and value) and penalty criteria for performance goals */
    var performanceGoalsInputsState: List<Criteria> = PerformanceGoals.values().map {
        Criteria(it.toString())
                                                                                                     },
    /** The weight, threshold (type and value) and penalty criteria for security properties */
    var securityPropertyInputsState: List<Criteria> = SecurityProperties.values().map {
        Criteria(it.toString())
                                                                                               },
    /** The attackers for the scenarios */
    var attackersByScenarioInputState: LinkedHashMap<Scenario, LinkedHashMap<PointsOfAttack, List<Attacker>>> = linkedMapOf(
        Scenario.Generic to linkedMapOf(
            PointsOfAttack.Client to listOf(Attacker(Attackers.Generic)),
            PointsOfAttack.Edge to listOf(Attacker(Attackers.Generic)),
            PointsOfAttack.OnPremise to listOf(Attacker(Attackers.Generic)),
            PointsOfAttack.Cloud to listOf(Attacker(Attackers.Generic)),
            PointsOfAttack.Client_Edge to listOf(Attacker(Attackers.Generic)),
            PointsOfAttack.Client_OnPremise to listOf(Attacker(Attackers.Generic)),
            PointsOfAttack.Client_Cloud to listOf(Attacker(Attackers.Generic)),
            PointsOfAttack.Edge_OnPremise to listOf(Attacker(Attackers.Generic)),
            PointsOfAttack.Edge_Cloud to listOf(Attacker(Attackers.Generic)),
            PointsOfAttack.OnPremise_Cloud to listOf(Attacker(Attackers.Generic)),
        )
    ) ,

    /** The list of domains */
    var domainsState: List<Domains> = Domains.values().toMutableList(),

    /** The list of entities */
    var entitiesState: List<Entities> = Entities.values().toMutableList(),
) : State

/** Power set of the given set */
fun <T> Collection<T>.powerSet(): Set<Set<T>> =
    powerSet(this, setOf(emptySet()))
private tailrec fun <T> powerSet(left: Collection<T>, acc: Set<Set<T>>): Set<Set<T>> =
    if (left.isEmpty()) acc
    else powerSet(left.drop(1), acc + acc.map { it + left.first() })

/** Cross product of two sets */
fun <T, R> Collection<T>.crossProduct(other: Collection<R>): List<Pair<T, R>> {
    return this.flatMap { element1 ->
        other.map { element2 ->
            element1 to element2
        }
    }
}


private fun getCriteria(
    props: TradeOffBoardProps,
    state: TradeOffBoardState
): List<Criteria> {
    return when (props.objectiveProp) {
        Objective.Performance -> state.performanceGoalsInputsState
        Objective.Security -> state.securityPropertyInputsState
        Objective.Both -> state.performanceGoalsInputsState + state.securityPropertyInputsState
    }
}

/**
 * Change the number of instances possible
 * for [entity] to the given [newNumberOfInstances]
 */
private fun changeNumberOfInstances(
    state: TradeOffBoardState,
    entity: Entities,
    newNumberOfInstances: Pair<Int, Int>
) {
    logger.info { "changeNumberOfInstances, entity $entity, newNumberOfInstances $newNumberOfInstances" }
    state.replicationIntervalState[entity] = newNumberOfInstances
}

/**
 * Change the penalty value of the
 * [objective] to the given [penalty]
 */
private fun changePenaltyValue(
    props: TradeOffBoardProps,
    state: TradeOffBoardState,
    objective: String,
    penalty: Int
) {
    logger.info { "changePenalty, objective $objective, penalty $penalty" }
    getCriteria(
        props = props,
        state = state
    ).first { it.name == objective }.penalty = penalty
}

/**
 * Change the threshold value of the
 * [objective] to the given [value]
 */
private fun changeThresholdValue(
    props: TradeOffBoardProps,
    state: TradeOffBoardState,
    objective: String,
    value: Int
) {
    logger.info { "changeThresholdValue, objective $objective, value $value" }
    getCriteria(
        props = props,
        state = state
    ).first { it.name == objective }.thresholdValue = value
}

/**
 * Change the threshold type of the
 * [objective] to the given [threshold]
 */
private fun changeThresholdType(
    props: TradeOffBoardProps,
    state: TradeOffBoardState,
    objective: String,
    threshold: Threshold
) {
    logger.info { "changeThresholdType, objective $objective, threshold $threshold" }
    getCriteria(
        props = props,
        state = state
    ).first { it.name == objective }.thresholdType = threshold
}

/**
 * Change the weight value of the
 * [objective] to the given [weight]
 */
private fun changeWeightValue(
    props: TradeOffBoardProps,
    state: TradeOffBoardState,
    objective: String,
    weight: Int
) {
    logger.info { "changeWeight, objective $objective, weight $weight" }
    getCriteria(
        props = props,
        state = state
    ).first { it.name == objective }.weight = weight
}

/**
 * Change the likelihood of the [attacker] threatening
 * the given [pointOfAttack] to the given [newLikelihood]
 */
private fun changeLikelihood(
    state: TradeOffBoardState,
    pointOfAttack: PointsOfAttack,
    attacker: Attackers,
    newLikelihood: Likelihood,
    scenario: Scenario
) {
    logger.info { "ChangeLikelihood, point of attack $pointOfAttack, attacker $attacker, newLikelihood $newLikelihood" }
    state.attackersByScenarioInputState[scenario]!![pointOfAttack]!!.first {
        it.attacker == attacker
    }.likelihood = newLikelihood
}

/**
 * Toggle the assignment of the [entity]
 * to the [domain] to the given value [accepted] */
private fun toggleAssignment(
    state: TradeOffBoardState,
    entity: Entities,
    domain: Domains,
    accepted: Boolean
) {
    logger.info { "ToggleAssignment, entity $entity, domain $domain, accepted $accepted" }
    if (accepted) {
        state.prefiltersState.remove(Assignment(entity, domain))
    } else {
        state.prefiltersState.add(Assignment(entity, domain))
    }
}

/**
 * Compute the list of possible architectures based on
 * the thresholds and pre-filters given, and evaluate
 * them (either MOCOP or SOOP)
 */
private fun computePossibleArchitectures(
    props: TradeOffBoardProps,
    state: TradeOffBoardState,
): List<Architecture> {

    if (state == undefined) { return listOf() }

    logger.info { "Derive the list of possible assignments" }
    val possibleAssignments = Entities.values().toSet().crossProduct(Domains.values().toSet()).map {
        Assignment(it.first, it.second)
    }.filter {
        it !in state.prefiltersState
    }
    props.handleChangeCircularProgressValueProp(25)

    val possibleArchitectures = possibleAssignments.powerSet().map {
        Architecture(it.toList())
    }.filter { architecture ->
        Entities.values().all { entity ->
            ((architecture.assignments.count { it.entity == entity }) >= state.replicationIntervalState[entity]!!.first)
                &&
            ((architecture.assignments.count { it.entity == entity }) <= state.replicationIntervalState[entity]!!.second)
        }
    }
    props.handleChangeCircularProgressValueProp(50)

    val candidateArchitectures = mutableListOf<Architecture>()
    if (possibleArchitectures.isNotEmpty()) {
        logger.info { "For each architecture, compute the scores array" }
        possibleArchitectures.forEach { currentArchitecture ->

            /** e.g., {redundancy:+1, scalability:0, ...} */
            val scoresMap = computeScoresArray(
                props = props,
                state = state,
                assignments = currentArchitecture.assignments
            )
            
            when (props.algorithmProp) {
                Algorithm.MOCOP -> {
                    currentArchitecture.arrayObjectivesScore = scoresMap
                    candidateArchitectures.add(currentArchitecture)
                }
                Algorithm.SOOP -> {
                    var finalScore = 0
                    var exclude = false

                    scoresMap.forEach { entry ->
                        val objectiveName = entry.key
                        var score = entry.value

                        val criteria = getCriteria(
                            props = props,
                            state = state
                        ).first { it.name == objectiveName }

                        when (criteria.thresholdType) {
                            Threshold.None -> { }
                            Threshold.Soft -> if (score < criteria.thresholdValue) {
                                score -= criteria.penalty
                            }
                            Threshold.Hard -> if (score < criteria.thresholdValue) {
                                exclude = true
                            }
                        }
                        finalScore += score * criteria.weight
                    }
                    if (!exclude) {
                        currentArchitecture.objectivesWeightedScore = finalScore
                        candidateArchitectures.add(currentArchitecture)
                    }
                }
            }
        }
    }

    logger.info { "There are ${candidateArchitectures.size} candidate architectures" }

    return if (candidateArchitectures.size != 0) {
        orderArchitectures(
            props = props,
            candidateArchitectures = candidateArchitectures)
    } else {

        candidateArchitectures
    }
}

// TODO DOC
private fun computePerformanceScoresArray(
    assignments: List<Assignment>
): LinkedHashMap<String, Int> {
    val scoresArray: LinkedHashMap<String, Int> = linkedMapOf()
    performanceGoalsScores.forEach { performanceGoalScores ->
        val performanceGoal = performanceGoalScores.key.toString()
        var score = 0
        val assignmentsAndScore = performanceGoalScores.value
        assignments.forEach { assignment ->
            score += assignmentsAndScore[assignment]!!
        }
        scoresArray[performanceGoal] = score
    }
    return scoresArray
}

// TODO DOC
private fun computeSecurityScoresArray(
    props: TradeOffBoardProps,
    state: TradeOffBoardState,
    assignments: List<Assignment>
): LinkedHashMap<String, Int> {
    val scoresArray: LinkedHashMap<String, Int> = linkedMapOf()
    securityPropertiesImpact.forEach { securityPropertyImpact ->
        val securityProperty = securityPropertyImpact.key.toString()
        var score = getProtectionLevel(impact = Impact.None, likelihood = Likelihood.None)
        val targetsAndImpact = securityPropertyImpact.value

        /** For each point of attack */
        state.attackersByScenarioInputState[props.scenarioProp]!!.forEach { attackersPerPointOfAttack ->
            val pointOfAttack = attackersPerPointOfAttack.key
            val pointOfAttackString = pointOfAttack.toString()
            val attackers = attackersPerPointOfAttack.value

            /** For each attacker in that point of attack */
            attackers.forEach { attacker ->

                /** The attacker operates in a point of attack which is a single domain */
                if (pointOfAttackString in enumValues<Domains>().map { it.toString() }) {

                    /** For each target in that domain */
                    val domain = Domains.valueOf(pointOfAttackString)
                    assignments.filter { it.domain == domain }.forEach {
                        val target = Targets.valueOf(it.entity.toString())

                        /** The attacker threatens that entity (keep lowest protection level) */
                        score = minOf(
                            score,
                            getProtectionLevel(targetsAndImpact[target]!!, attacker.likelihood)
                        )
                    }
                }
                /**
                 * The attacker operates in a point of attack which
                 * is a communication link between the two domains
                 */
                else {
                    val firstDomainString = pointOfAttackString.split("_")[0]
                    val secondDomainString = pointOfAttackString.split("_")[1]
                    val firstDomain = Domains.valueOf(firstDomainString)
                    val secondDomain = Domains.valueOf(secondDomainString)

                    val entitiesInFirstDomain = mutableListOf<Entities>()
                    val entitiesInSecondDomain = mutableListOf<Entities>()
                    assignments.forEach {
                        if (it.domain == firstDomain) {
                            entitiesInFirstDomain.add(it.entity)
                        } else if (it.domain == secondDomain) {
                            entitiesInSecondDomain.add(it.entity)
                        }
                    }

                    entitiesInFirstDomain.forEach { firstEntity ->
                        entitiesInSecondDomain.forEach { secondEntity ->

                            val listOfTargetsStrings = Targets.values().map { it.toString() }
                            val targetString = if ("${firstEntity}_$secondEntity" in listOfTargetsStrings) {
                                "${firstEntity}_$secondEntity"
                            } else if ("${secondEntity}_$firstEntity" in listOfTargetsStrings) {
                                "${secondEntity}_$firstEntity"
                            } else {
                                null
                            }

                            if (targetString != null) {
                                val target = Targets.valueOf(targetString)
                                targetsAndImpact[target]?.let {
                                    /** The attacker threatens the data flow between the two entities */
                                    score = minOf(
                                        score,
                                        getProtectionLevel(it, attacker.likelihood)
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }
        scoresArray[securityProperty] = score
    }
    return scoresArray
}

private fun computeScoresArray(
    props: TradeOffBoardProps,
    state: TradeOffBoardState,
    assignments: List<Assignment>
): LinkedHashMap<String, Int> {
    val scoresArray: LinkedHashMap<String, Int> = linkedMapOf()

    when (props.objectiveProp) {
        Objective.Performance -> {
            scoresArray.putAll(computePerformanceScoresArray(
                assignments = assignments
            ))
        }
        Objective.Security -> {
            scoresArray.putAll(computeSecurityScoresArray(
                props = props,
                state = state,
                assignments = assignments
            ))
        }
        Objective.Both -> {
            scoresArray.putAll(computePerformanceScoresArray(
                assignments = assignments
            ))
            scoresArray.putAll(computeSecurityScoresArray(
                props = props,
                state = state,
                assignments = assignments
            ))
        }
    }

    return scoresArray
}

private fun orderArchitectures(
    props: TradeOffBoardProps,
    candidateArchitectures: MutableList<Architecture>
): MutableList<Architecture> {

    logger.info { "${candidateArchitectures.size} architectures are being ordered" }

    return when (props.algorithmProp) {
        Algorithm.SOOP -> {
            candidateArchitectures.sortedByDescending { it.objectivesWeightedScore }.toMutableList()
        }
        Algorithm.MOCOP -> {

            /** Find the optimal */
            var currentOptimal = candidateArchitectures.first()
            candidateArchitectures.forEach { currentArchitecture ->
                if (dominates(currentArchitecture.arrayObjectivesScore, currentOptimal.arrayObjectivesScore)) {
                    currentOptimal = currentArchitecture
                }
            }

            /** Remove dominated architectures */
            val iterator = candidateArchitectures.iterator()
            while (iterator.hasNext()) {
                val currentArchitecture = iterator.next()
                if (dominates(currentOptimal.arrayObjectivesScore, currentArchitecture.arrayObjectivesScore)) {
                    iterator.remove()
                }
            }
            logger.info { "${candidateArchitectures.size} architectures are optimal" }
            candidateArchitectures
        }
    }
}

private fun dominates(dominator: LinkedHashMap<String, Int>, dominatee: LinkedHashMap<String, Int>): Boolean {
    var dominate = true
    var majorInAtLeastOne = false
    dominator.forEach {
        if (dominatee[it.key]!! > it.value) {
            dominate = false
        }
        if (it.value > dominatee[it.key]!!) {
            majorInAtLeastOne = true
        }
    }
    return dominate && majorInAtLeastOne
}

// TODO doc
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

/** The TradeOffBoard React component */
val TradeOffBoard = FC<TradeOffBoardProps> {props ->

    /**
     *  Always declare the state variables as the first variables in the
     *  function. Doing so ensures the variables are available for the
     *  rest of the code within the function.
     *  See [TradeOffBoardState] for details
     */
    var state by useState(TradeOffBoardState())

    div {
        css {
            textAlign = TextAlign.center
            paddingTop = 10.px
            paddingBottom = 10.px
        }

        grid {
            container = true
            spacing = 3

            /** Allow users to define how many instances of each entity to have */
            grid {
                item = true
                sm = 12
                md = 12
                lg = 12
                xl = 12
                CryptoACPaper {
                    titleStyleProp = plainPaperTitleStyle
                    titleTextProp = "Replication Interval"
                    titleVariantProp = "subtitle1"
                    setDividerProp = false
                    dividerWidthProp = 95.pct
                    childProp = FC<Props> {
                        table {
                            css {
                                borderCollapse = BorderCollapse.collapse
                                width = 100.pct
                            }
                            /** The first row contains the titles */
                            thead {
                                css {
                                    borderBottomColor = Color("rgba(173, 173, 173, 0.2)")
                                    borderBottomWidth = 1.px
                                    borderBottomStyle = LineStyle.solid
                                }
                                tr {
                                    state.entitiesState.forEach {
                                        td {
                                            css {
                                                padding = Padding(4.px, 4.px)
                                            }
                                            +it.toString()
                                        }
                                    }
                                }
                            }

                            /** The rows are for the sliders */
                            tbody {
                                tr {
                                    state.entitiesState.forEachIndexed { index, entity ->
                                        td {
                                            css {
                                                if (index == 0) {
                                                    paddingTop = 3.px
                                                } else if (index == state.entitiesState.size - 1) {
                                                    paddingBottom = 3.px
                                                }
                                                if (index == state.entitiesState.size - 1 && index == state.entitiesState.size - 1) {
                                                    borderBottomRightRadius = 15.px
                                                }
                                            }
                                            CryptoACSlider {
                                                labelProps = ""
                                                minProps = 0
                                                maxProps = state.domainsState.size
                                                defaultValuesProps = arrayOf(1, 1) // arrayOf(0, Domains.values().size)
                                                colorProps = "primary"
                                                rangeProps = true
                                                onChangeProps = { newNumberOfInstances ->
                                                    val newNumberOfInstancesArray = newNumberOfInstances as Array<Int>
                                                    val newNumberOfInstancesPair = (newNumberOfInstancesArray[0] to newNumberOfInstancesArray[1])
                                                    changeNumberOfInstances(
                                                        state = state,
                                                        entity = entity,
                                                        newNumberOfInstances = newNumberOfInstancesPair
                                                    )
                                                    /** do not trigger the re-render */
                                                    //state = state.copy()
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }.create()
                }
            }

            /** Allow users to set pre-filters */
            grid {
                item = true
                sm = 12
                md = 12
                lg = 12
                xl = 12
                CryptoACPaper {
                    titleStyleProp = plainPaperTitleStyle
                    titleTextProp = "Pre-filters"
                    titleVariantProp = "subtitle1"
                    setDividerProp = false
                    dividerWidthProp = 95.pct
                    childProp = FC<Props> {
                        table {
                            css {
                                borderCollapse = BorderCollapse.collapse
                                width = 100.pct
                            }
                            /** The first row contains the entities */
                            thead {
                                css {
                                    borderBottomColor = Color("rgba(173, 173, 173, 0.2)")
                                    borderBottomWidth = 1.px
                                    borderBottomStyle = LineStyle.solid
                                }
                                tr {
                                    td {
                                        css {
                                            padding = Padding(4.px, 4.px)
                                        }
                                    }
                                    state.entitiesState.forEach {
                                        td {
                                            css {
                                                padding = Padding(4.px, 4.px)
                                            }
                                            +it.toString()
                                        }
                                    }
                                }
                            }

                            /** The rows are for the domains */
                            tbody {
                                state.domainsState.forEachIndexed { index, domain ->
                                    tr {
                                        td {
                                            css {
                                                paddingLeft = 10.px
                                                width = 160.px
                                                textAlign = TextAlign.left
                                                if (index == state.domainsState.size - 1) {
                                                    borderBottomLeftRadius = 15.px
                                                }
                                            }
                                            +domain.toString()
                                        }
                                        state.entitiesState.forEachIndexed { entityIndex, entity ->
                                            td {
                                                css {
                                                    if (index == 0) {
                                                        paddingTop = 3.px
                                                    } else if (index == state.domainsState.size - 1) {
                                                        paddingBottom = 3.px
                                                    }
                                                    if (index == state.domainsState.size - 1 && entityIndex == state.entitiesState.size - 1) {
                                                        borderBottomRightRadius = 15.px
                                                    }
                                                }
                                                EntityIcon {
                                                    key = domain.toString() + entity.toString()
                                                    srcProp = getImageFromEntity(entity)
                                                    defaultSelectedProp = !state.prefiltersState.contains(Assignment(entity, domain))
                                                    onClickProp = { entity, domain, assignment ->
                                                        toggleAssignment(
                                                            state = state,
                                                            entity = entity,
                                                            domain = domain,
                                                            accepted = assignment
                                                        )
                                                        /** do not trigger the re-render */
                                                        //state = state.copy()
                                                    }
                                                    entityProp = entity
                                                    domainProp = domain
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }.create()
                }
            }

            /** Allow users to input trust assumptions */
            if (props.objectiveProp == Objective.Security || props.objectiveProp == Objective.Both) {
                grid {
                    item = true
                    sm = 12
                    md = 12
                    lg = 12
                    xl = 12
                    CryptoACPaper {
                        titleStyleProp = plainPaperTitleStyle
                        titleTextProp = "Trust Assumptions"
                        titleVariantProp = "subtitle1"
                        setDividerProp = false
                        dividerWidthProp = 95.pct
                        childProp = FC<Props> {
                            table {
                                css {
                                    borderCollapse = BorderCollapse.collapse
                                    width = 100.pct
                                }

                                /** The first row contains the headers */
                                thead {
                                    css {
                                        borderBottomColor = Color("rgba(173, 173, 173, 0.2)")
                                        borderBottomWidth = 1.px
                                        borderBottomStyle = LineStyle.solid
                                    }
                                    tr {
                                        td {
                                            css {
                                                padding = Padding(4.px, 4.px)
                                            }
                                            +"Point of Attack"
                                        }
                                        td {
                                            css {
                                                padding = Padding(4.px, 4.px)
                                            }
                                            +"Attacker"
                                        }
                                        td {
                                            css {
                                                padding = Padding(4.px, 4.px)
                                            }
                                            colSpan = 2
                                            +"Likelihood"
                                        }
                                    }
                                }

                                /** Each row contains the attackers and likelihoods */
                                tbody {
                                    val iterator = state.attackersByScenarioInputState[props.scenarioProp]!!.iterator()
                                    while (iterator.hasNext()) {
                                        val entry = iterator.next()
                                        val domain = entry.key
                                        val attackers = entry.value
                                        tr {
                                            td {
                                                css {
                                                    paddingLeft = 10.px
                                                    width = 160.px
                                                    textAlign = TextAlign.left
                                                    if (!iterator.hasNext()) {
                                                        borderBottomLeftRadius = 15.px
                                                    }
                                                }
                                                rowSpan = attackers.size
                                                +domain.toString().replace("_", "-")
                                            }
                                            TrustAssumptionsLikelihood {
                                                defaultLikelihoodProp = Likelihood.High
                                                lastProp = attackers.size == 1 && !iterator.hasNext()
                                                defaultLikelihoodProp = state.attackersByScenarioInputState[props.scenarioProp]!![domain]!!.first {
                                                    it.attacker == attackers.first().attacker
                                                }.likelihood
                                                domainProp = domain
                                                attackerProp = attackers.first().attacker
                                                handleChangeLikelihoodProp = { domain, attacker, newLikelihood ->
                                                    changeLikelihood(
                                                        state = state,
                                                        pointOfAttack = domain,
                                                        attacker = attacker,
                                                        newLikelihood = newLikelihood,
                                                        scenario = props.scenarioProp
                                                    )
                                                    /** do not trigger the re-render */
                                                    //state = state.copy()
                                                }
                                            }
                                        }
                                        attackers.forEachIndexed { index, attacker ->
                                            if (index != 0) {
                                                tr {
                                                    TrustAssumptionsLikelihood {
                                                        defaultLikelihoodProp = Likelihood.High
                                                        lastProp = index == attackers.size - 1 && !iterator.hasNext()
                                                        defaultLikelihoodProp = state.attackersByScenarioInputState[props.scenarioProp]!![domain]!!.first {
                                                            it.attacker == attacker.attacker
                                                        }.likelihood
                                                        domainProp = domain
                                                        attackerProp = attacker.attacker
                                                        handleChangeLikelihoodProp =
                                                            { domain, attacker, newLikelihood ->
                                                                changeLikelihood(
                                                                    state = state,
                                                                    pointOfAttack = domain,
                                                                    attacker = attacker,
                                                                    newLikelihood = newLikelihood,
                                                                    scenario = props.scenarioProp
                                                                )
                                                                /** do not trigger the re-render */
                                                                //state = state.copy()
                                                            }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }.create()
                    }
                }
            }

            if (props.algorithmProp == Algorithm.SOOP) {

                /** Allow users to input weights and constraints for objectives */
                grid {
                    item = true
                    sm = 12
                    md = 12
                    lg = 12
                    xl = 12
                    CryptoACPaper {
                        titleStyleProp = plainPaperTitleStyle
                        titleTextProp = when (props.objectiveProp) {
                            Objective.Security -> "Security Properties"
                            Objective.Performance -> "Performance Goals"
                            Objective.Both -> "Performance Goals and Security Properties"
                        }
                        titleVariantProp = "subtitle1"
                        setDividerProp = false
                        dividerWidthProp = 95.pct
                        childProp = FC<Props> {
                            table {
                                css {
                                    borderCollapse = BorderCollapse.collapse
                                    width = 100.pct
                                }

                                /** The first row contains the headers */
                                thead {
                                    css {
                                        borderBottomColor = Color("rgba(173, 173, 173, 0.2)")
                                        borderBottomWidth = 1.px
                                        borderBottomStyle = LineStyle.solid
                                    }
                                    tr {
                                        td {
                                            css {
                                                padding = Padding(4.px, 4.px)
                                            }
                                        }
                                        td {
                                            css {
                                                padding = Padding(4.px, 4.px)
                                            }
                                            +"Weight"
                                        }
                                        td {
                                            css {
                                                padding = Padding(4.px, 4.px)
                                            }
                                            +"Threshold"
                                        }
                                        td {
                                            css {
                                                padding = Padding(4.px, 4.px)
                                            }
                                            +"Threshold Value"
                                        }
                                        td {
                                            css {
                                                padding = Padding(4.px, 4.px)
                                            }
                                            +"Penalty"
                                        }
                                    }
                                }

                                /** Each row contains the attackers and likelihoods */
                                tbody {

                                    val criterias = getCriteria(
                                        props = props,
                                        state = state
                                    )

                                    criterias.forEachIndexed { index, req ->
                                        key = req.name
                                        tr {
                                            ObjectiveItem {
                                                defaultValueProp = getCriteria(
                                                    props = props,
                                                    state = state
                                                ).first { it.name == req.name }
                                                lastProp = index == criterias.size - 1
                                                criteriaProp = req
                                                handleChangeWeightValueProp = { weight ->
                                                    changeWeightValue(
                                                        props = props,
                                                        state = state,
                                                        objective = req.name,
                                                        weight = weight
                                                    )
                                                    /** do not trigger the re-render */
                                                    //state = state.copy()
                                                }
                                                handleChangeThresholdTypeProp = { type ->
                                                    changeThresholdType(
                                                        props = props,
                                                        state = state,
                                                        objective = req.name,
                                                        threshold = type
                                                    )
                                                    /** do not trigger the re-render */
                                                    state = state.copy()
                                                }
                                                handleChangeThresholdValueProp = { threshold ->
                                                    changeThresholdValue(
                                                        props = props,
                                                        state = state,
                                                        objective = req.name,
                                                        value = threshold
                                                    )
                                                    /** do not trigger the re-render */
                                                    //state = state.copy()
                                                }
                                                handleChangePenaltyValueProp = { penalty ->
                                                    changePenaltyValue(
                                                        props = props,
                                                        state = state,
                                                        objective = req.name,
                                                        penalty = penalty
                                                    )
                                                    /** do not trigger the re-render */
                                                    //state = state.copy()
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }.create()
                    }
                }
            }
        }

        br { }

        /** The ranking of architectures */
        CryptoACPaper {
            titleStyleProp = plainPaperTitleStyle
            titleTextProp = "Optimal Architectures"
            titleVariantProp = "subtitle1"
            setDividerProp = false
            dividerWidthProp = 95.pct
            childProp = FC<Props> {
                div {
                    css {
                        float = Float.right
                    }
                    iconButton {
                        size = "small"
                        label = "refresh"
                        color = "secondary"
                        onClick = {
                            // TODO the backdrop does not work => I think
                            //  "computePossibleArchitectures" takes too
                            //  much CPU resources and thus React does not
                            //  render
                            //  Wrapping "computePossibleArchitectures" around "MainScope().launch" does not work
                            props.handleChangeBackdropIsOpenProp(true)
                            val newArchitectures = computePossibleArchitectures(
                                props = props,
                                state = state
                            )
                            state = state.copy(optimalArchitecturesState = newArchitectures)
                            props.handleChangeBackdropIsOpenProp(false)
                        }
                        faUndoAlt { }
                    }
                }

                table {
                    css {
                        borderCollapse = BorderCollapse.collapse
                        width = 100.pct
                    }
                    /** The first row contains the domains */
                    thead {
                        css {
                            borderBottomColor = Color("rgba(173, 173, 173, 0.2)")
                            borderBottomWidth = 1.px
                            borderBottomStyle = LineStyle.solid
                        }
                        tr {
                            state.domainsState.forEach {
                                td {
                                    css {
                                        padding = Padding(4.px, 4.px)
                                    }
                                    +it.toString()
                                }
                            }
                            td {
                                css {
                                    padding = Padding(4.px, 4.px)
                                }
                                +"Score"
                            }
                        }
                    }

                    tbody {
                        val architecturesToShow = state.optimalArchitecturesState
                        logger.info { "Showing ${architecturesToShow.size} architectures" }
                        architecturesToShow.forEachIndexed { architectureIndex, architecture ->
                            tr {
                                state.domainsState.forEachIndexed { domainIndex, domain ->
                                    val entitiesInDomain = architecture.assignments.filter {
                                        it.domain == domain
                                    }.map { it.entity }
                                    td {
                                        css {
                                            if (architectureIndex == 0) {
                                                paddingTop = 3.px
                                            } else if (architectureIndex == architecturesToShow.size - 1) {
                                                paddingBottom = 3.px
                                                if (domainIndex == 0) {
                                                    borderBottomLeftRadius = 15.px
                                                }
                                            }
                                        }
                                        entitiesInDomain.forEach { entity ->
                                            EntityIcon {
                                                srcProp = getImageFromEntity(entity)
                                                defaultSelectedProp = true
                                            }
                                        }
                                    }
                                }

                                td {
                                    css {
                                        if (architectureIndex == 0) {
                                            paddingTop = 3.px
                                        } else if (architectureIndex == architecturesToShow.size - 1) {
                                            paddingBottom = 3.px
                                            borderBottomRightRadius = 15.px
                                        }
                                        display = Display.flex
                                        justifyContent = JustifyContent.center
                                        fontSize = 80.pct
                                        transform = translatey(50.pct)
                                    }
                                    if (props.algorithmProp == Algorithm.SOOP) {
                                        +architecture.objectivesWeightedScore.toString()
                                    } else if (props.algorithmProp == Algorithm.MOCOP) {
                                        architecture.arrayObjectivesScore.forEach {

                                            val score = it.value

                                            tooltip {
                                                title = it.key.replace("_", "-")
                                                div {
                                                    child(FC<Props> {
                                                        span {
                                                            css {
                                                                marginRight = 0.5.em
                                                                fontFamily = FontFamily.monospace
                                                                color = Color(
                                                                    if (score < 0) {
                                                                        "#c0392b"
                                                                    } else if (score == 0) {
                                                                        "black"
                                                                    } else {
                                                                        "#27ae60"
                                                                    }
                                                                )
                                                            }
                                                            +"${
                                                                (if (score >= 0) {
                                                                    "+"
                                                                } else {
                                                                    ""
                                                                })
                                                            }$score"
                                                        }
                                                    }.create())
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }.create()
        }
    }
}

// TODO doc below
enum class Scenario { Generic }

enum class Algorithm { MOCOP, SOOP }

enum class Objective { Performance, Security, Both }

enum class Domains { Client, OnPremise, Edge, Cloud }

enum class PointsOfAttack { Client, OnPremise, Edge, Cloud, Client_Edge, Client_OnPremise, Client_Cloud, Edge_OnPremise, Edge_Cloud, OnPremise_Cloud }

enum class Entities { PR, RM, MM, DM }

enum class Targets { PR, RM, MM, DM, PR_RM, PR_DM, PR_MM, RM_MM, RM_DM, MM_DM }

enum class Attackers { Generic }

enum class Likelihood { High, Medium, Low, None }

enum class Impact { High, Medium, Low, None }

enum class Threshold { None, Soft, Hard }

enum class SecurityProperties { Confidentiality, Integrity, Availability }

enum class PerformanceGoals {
    Redundancy,
    Scalability,
    Reliability,
    Maintenance,
    DoS_Resilience,
    Cloud_Vendor_Lock_in,
    On_premise_Savings,
    Cloud_Savings,
    Bandwidth,
    Latency,
    Computational_Power,
    Memory,
    Edge_Vendor_Lock_in,
    Edge_Savings,
}

fun getImageFromEntity(entity: Entities) = when (entity) {
    Entities.PR -> "proxy.png"
    Entities.RM -> "rm.png"
    Entities.MM -> "mm.png"
    Entities.DM -> "dm.png"
}

/** The impact of assignments on each performance goal of the current scenario */
var performanceGoalsScores: LinkedHashMap<PerformanceGoals, LinkedHashMap<Assignment, Int>> = linkedMapOf(
    PerformanceGoals.Redundancy to linkedMapOf(
        Assignment(Entities.PR, Domains.Client) to 0,
        Assignment(Entities.RM, Domains.Client) to 0,
        Assignment(Entities.MM, Domains.Client) to 0,
        Assignment(Entities.DM, Domains.Client) to 0,

        Assignment(Entities.PR, Domains.OnPremise) to -1,
        Assignment(Entities.RM, Domains.OnPremise) to -1,
        Assignment(Entities.MM, Domains.OnPremise) to -1,
        Assignment(Entities.DM, Domains.OnPremise) to -1,

        Assignment(Entities.PR, Domains.Edge) to -1,
        Assignment(Entities.RM, Domains.Edge) to -1,
        Assignment(Entities.MM, Domains.Edge) to -1,
        Assignment(Entities.DM, Domains.Edge) to -1,

        Assignment(Entities.PR, Domains.Cloud) to +1,
        Assignment(Entities.RM, Domains.Cloud) to +1,
        Assignment(Entities.MM, Domains.Cloud) to +1,
        Assignment(Entities.DM, Domains.Cloud) to +1,
    ),
    PerformanceGoals.Scalability to linkedMapOf(
        Assignment(Entities.PR, Domains.Client) to +1,
        Assignment(Entities.RM, Domains.Client) to +1,
        Assignment(Entities.MM, Domains.Client) to +1,
        Assignment(Entities.DM, Domains.Client) to +1,

        Assignment(Entities.PR, Domains.OnPremise) to -1,
        Assignment(Entities.RM, Domains.OnPremise) to -1,
        Assignment(Entities.MM, Domains.OnPremise) to -1,
        Assignment(Entities.DM, Domains.OnPremise) to -1,

        Assignment(Entities.PR, Domains.Edge) to 0,
        Assignment(Entities.RM, Domains.Edge) to 0,
        Assignment(Entities.MM, Domains.Edge) to 0,
        Assignment(Entities.DM, Domains.Edge) to 0,

        Assignment(Entities.PR, Domains.Cloud) to 0,
        Assignment(Entities.RM, Domains.Cloud) to 0,
        Assignment(Entities.MM, Domains.Cloud) to 0,
        Assignment(Entities.DM, Domains.Cloud) to 0,
    ),
    PerformanceGoals.Reliability to linkedMapOf(
        Assignment(Entities.PR, Domains.Client) to 0,
        Assignment(Entities.RM, Domains.Client) to 0,
        Assignment(Entities.MM, Domains.Client) to 0,
        Assignment(Entities.DM, Domains.Client) to 0,

        Assignment(Entities.PR, Domains.OnPremise) to -1,
        Assignment(Entities.RM, Domains.OnPremise) to -1,
        Assignment(Entities.MM, Domains.OnPremise) to -1,
        Assignment(Entities.DM, Domains.OnPremise) to -1,

        Assignment(Entities.PR, Domains.Edge) to -1,
        Assignment(Entities.RM, Domains.Edge) to -1,
        Assignment(Entities.MM, Domains.Edge) to -1,
        Assignment(Entities.DM, Domains.Edge) to -1,

        Assignment(Entities.PR, Domains.Cloud) to +1,
        Assignment(Entities.RM, Domains.Cloud) to +1,
        Assignment(Entities.MM, Domains.Cloud) to +1,
        Assignment(Entities.DM, Domains.Cloud) to +1,
    ),
    PerformanceGoals.Maintenance to linkedMapOf(
        Assignment(Entities.PR, Domains.Client) to 0,
        Assignment(Entities.RM, Domains.Client) to 0,
        Assignment(Entities.MM, Domains.Client) to 0,
        Assignment(Entities.DM, Domains.Client) to 0,

        Assignment(Entities.PR, Domains.OnPremise) to -1,
        Assignment(Entities.RM, Domains.OnPremise) to -1,
        Assignment(Entities.MM, Domains.OnPremise) to -1,
        Assignment(Entities.DM, Domains.OnPremise) to -1,

        Assignment(Entities.PR, Domains.Edge) to +1,
        Assignment(Entities.RM, Domains.Edge) to +1,
        Assignment(Entities.MM, Domains.Edge) to +1,
        Assignment(Entities.DM, Domains.Edge) to +1,

        Assignment(Entities.PR, Domains.Cloud) to +1,
        Assignment(Entities.RM, Domains.Cloud) to +1,
        Assignment(Entities.MM, Domains.Cloud) to +1,
        Assignment(Entities.DM, Domains.Cloud) to +1,
    ),
    PerformanceGoals.DoS_Resilience to linkedMapOf(
        Assignment(Entities.PR, Domains.Client) to +1,
        Assignment(Entities.RM, Domains.Client) to +1,
        Assignment(Entities.MM, Domains.Client) to +1,
        Assignment(Entities.DM, Domains.Client) to +1,

        Assignment(Entities.PR, Domains.OnPremise) to -1,
        Assignment(Entities.RM, Domains.OnPremise) to -1,
        Assignment(Entities.MM, Domains.OnPremise) to -1,
        Assignment(Entities.DM, Domains.OnPremise) to -1,

        Assignment(Entities.PR, Domains.Edge) to 0,
        Assignment(Entities.RM, Domains.Edge) to 0,
        Assignment(Entities.MM, Domains.Edge) to 0,
        Assignment(Entities.DM, Domains.Edge) to 0,

        Assignment(Entities.PR, Domains.Cloud) to +1,
        Assignment(Entities.RM, Domains.Cloud) to +1,
        Assignment(Entities.MM, Domains.Cloud) to +1,
        Assignment(Entities.DM, Domains.Cloud) to +1,
    ),
    PerformanceGoals.Cloud_Vendor_Lock_in to linkedMapOf(
        Assignment(Entities.PR, Domains.Client) to +1,
        Assignment(Entities.RM, Domains.Client) to +1,
        Assignment(Entities.MM, Domains.Client) to +1,
        Assignment(Entities.DM, Domains.Client) to +1,

        Assignment(Entities.PR, Domains.OnPremise) to +1,
        Assignment(Entities.RM, Domains.OnPremise) to +1,
        Assignment(Entities.MM, Domains.OnPremise) to +1,
        Assignment(Entities.DM, Domains.OnPremise) to +1,

        Assignment(Entities.PR, Domains.Edge) to +1,
        Assignment(Entities.RM, Domains.Edge) to +1,
        Assignment(Entities.MM, Domains.Edge) to +1,
        Assignment(Entities.DM, Domains.Edge) to +1,

        Assignment(Entities.PR, Domains.Cloud) to -1,
        Assignment(Entities.RM, Domains.Cloud) to -1,
        Assignment(Entities.MM, Domains.Cloud) to -1,
        Assignment(Entities.DM, Domains.Cloud) to -1,
    ),
    PerformanceGoals.On_premise_Savings to linkedMapOf(
        Assignment(Entities.PR, Domains.Client) to +1,
        Assignment(Entities.RM, Domains.Client) to +1,
        Assignment(Entities.MM, Domains.Client) to +1,
        Assignment(Entities.DM, Domains.Client) to +1,

        Assignment(Entities.PR, Domains.OnPremise) to -1,
        Assignment(Entities.RM, Domains.OnPremise) to -1,
        Assignment(Entities.MM, Domains.OnPremise) to -1,
        Assignment(Entities.DM, Domains.OnPremise) to -1,

        Assignment(Entities.PR, Domains.Edge) to +1,
        Assignment(Entities.RM, Domains.Edge) to +1,
        Assignment(Entities.MM, Domains.Edge) to +1,
        Assignment(Entities.DM, Domains.Edge) to +1,

        Assignment(Entities.PR, Domains.Cloud) to +1,
        Assignment(Entities.RM, Domains.Cloud) to +1,
        Assignment(Entities.MM, Domains.Cloud) to +1,
        Assignment(Entities.DM, Domains.Cloud) to +1,
    ),
    PerformanceGoals.Cloud_Savings to linkedMapOf(
        Assignment(Entities.PR, Domains.Client) to +1,
        Assignment(Entities.RM, Domains.Client) to +1,
        Assignment(Entities.MM, Domains.Client) to +1,
        Assignment(Entities.DM, Domains.Client) to +1,

        Assignment(Entities.PR, Domains.OnPremise) to +1,
        Assignment(Entities.RM, Domains.OnPremise) to +1,
        Assignment(Entities.MM, Domains.OnPremise) to +1,
        Assignment(Entities.DM, Domains.OnPremise) to +1,

        Assignment(Entities.PR, Domains.Edge) to +1,
        Assignment(Entities.RM, Domains.Edge) to +1,
        Assignment(Entities.MM, Domains.Edge) to +1,
        Assignment(Entities.DM, Domains.Edge) to +1,

        Assignment(Entities.PR, Domains.Cloud) to -1,
        Assignment(Entities.RM, Domains.Cloud) to -1,
        Assignment(Entities.MM, Domains.Cloud) to -1,
        Assignment(Entities.DM, Domains.Cloud) to -1,
    ),

    PerformanceGoals.Bandwidth to linkedMapOf(
        Assignment(Entities.PR, Domains.Client) to -1,
        Assignment(Entities.RM, Domains.Client) to -1,
        Assignment(Entities.MM, Domains.Client) to -1,
        Assignment(Entities.DM, Domains.Client) to -1,

        Assignment(Entities.PR, Domains.OnPremise) to -1,
        Assignment(Entities.RM, Domains.OnPremise) to -1,
        Assignment(Entities.MM, Domains.OnPremise) to -1,
        Assignment(Entities.DM, Domains.OnPremise) to -1,

        Assignment(Entities.PR, Domains.Edge) to 0,
        Assignment(Entities.RM, Domains.Edge) to 0,
        Assignment(Entities.MM, Domains.Edge) to 0,
        Assignment(Entities.DM, Domains.Edge) to 0,

        Assignment(Entities.PR, Domains.Cloud) to +1,
        Assignment(Entities.RM, Domains.Cloud) to +1,
        Assignment(Entities.MM, Domains.Cloud) to +1,
        Assignment(Entities.DM, Domains.Cloud) to +1,
    ),
    PerformanceGoals.Latency to linkedMapOf(
        Assignment(Entities.PR, Domains.Client) to 0,
        Assignment(Entities.RM, Domains.Client) to 0,
        Assignment(Entities.MM, Domains.Client) to 0,
        Assignment(Entities.DM, Domains.Client) to 0,

        Assignment(Entities.PR, Domains.OnPremise) to 0,
        Assignment(Entities.RM, Domains.OnPremise) to 0,
        Assignment(Entities.MM, Domains.OnPremise) to 0,
        Assignment(Entities.DM, Domains.OnPremise) to 0,

        Assignment(Entities.PR, Domains.Edge) to +1,
        Assignment(Entities.RM, Domains.Edge) to +1,
        Assignment(Entities.MM, Domains.Edge) to +1,
        Assignment(Entities.DM, Domains.Edge) to +1,

        Assignment(Entities.PR, Domains.Cloud) to -1,
        Assignment(Entities.RM, Domains.Cloud) to -1,
        Assignment(Entities.MM, Domains.Cloud) to -1,
        Assignment(Entities.DM, Domains.Cloud) to -1,
    ),
    PerformanceGoals.Computational_Power to linkedMapOf(
        Assignment(Entities.PR, Domains.Client) to -1,
        Assignment(Entities.RM, Domains.Client) to -1,
        Assignment(Entities.MM, Domains.Client) to -1,
        Assignment(Entities.DM, Domains.Client) to -1,

        Assignment(Entities.PR, Domains.OnPremise) to -1,
        Assignment(Entities.RM, Domains.OnPremise) to -1,
        Assignment(Entities.MM, Domains.OnPremise) to -1,
        Assignment(Entities.DM, Domains.OnPremise) to -1,

        Assignment(Entities.PR, Domains.Edge) to 0,
        Assignment(Entities.RM, Domains.Edge) to 0,
        Assignment(Entities.MM, Domains.Edge) to 0,
        Assignment(Entities.DM, Domains.Edge) to 0,

        Assignment(Entities.PR, Domains.Cloud) to +1,
        Assignment(Entities.RM, Domains.Cloud) to +1,
        Assignment(Entities.MM, Domains.Cloud) to +1,
        Assignment(Entities.DM, Domains.Cloud) to +1,
    ),
    PerformanceGoals.Memory to linkedMapOf(
        Assignment(Entities.PR, Domains.Client) to -1,
        Assignment(Entities.RM, Domains.Client) to -1,
        Assignment(Entities.MM, Domains.Client) to -1,
        Assignment(Entities.DM, Domains.Client) to -1,

        Assignment(Entities.PR, Domains.OnPremise) to -1,
        Assignment(Entities.RM, Domains.OnPremise) to -1,
        Assignment(Entities.MM, Domains.OnPremise) to -1,
        Assignment(Entities.DM, Domains.OnPremise) to -1,

        Assignment(Entities.PR, Domains.Edge) to -1,
        Assignment(Entities.RM, Domains.Edge) to -1,
        Assignment(Entities.MM, Domains.Edge) to -1,
        Assignment(Entities.DM, Domains.Edge) to -1,

        Assignment(Entities.PR, Domains.Cloud) to +1,
        Assignment(Entities.RM, Domains.Cloud) to +1,
        Assignment(Entities.MM, Domains.Cloud) to +1,
        Assignment(Entities.DM, Domains.Cloud) to +1,
    ),
    PerformanceGoals.Edge_Vendor_Lock_in to linkedMapOf(
        Assignment(Entities.PR, Domains.Client) to +1,
        Assignment(Entities.RM, Domains.Client) to +1,
        Assignment(Entities.MM, Domains.Client) to +1,
        Assignment(Entities.DM, Domains.Client) to +1,

        Assignment(Entities.PR, Domains.OnPremise) to +1,
        Assignment(Entities.RM, Domains.OnPremise) to +1,
        Assignment(Entities.MM, Domains.OnPremise) to +1,
        Assignment(Entities.DM, Domains.OnPremise) to +1,

        Assignment(Entities.PR, Domains.Edge) to -1,
        Assignment(Entities.RM, Domains.Edge) to -1,
        Assignment(Entities.MM, Domains.Edge) to -1,
        Assignment(Entities.DM, Domains.Edge) to -1,

        Assignment(Entities.PR, Domains.Cloud) to +1,
        Assignment(Entities.RM, Domains.Cloud) to +1,
        Assignment(Entities.MM, Domains.Cloud) to +1,
        Assignment(Entities.DM, Domains.Cloud) to +1,
    ),
    PerformanceGoals.Edge_Savings to linkedMapOf(
        Assignment(Entities.PR, Domains.Client) to +1,
        Assignment(Entities.RM, Domains.Client) to +1,
        Assignment(Entities.MM, Domains.Client) to +1,
        Assignment(Entities.DM, Domains.Client) to +1,

        Assignment(Entities.PR, Domains.OnPremise) to +1,
        Assignment(Entities.RM, Domains.OnPremise) to +1,
        Assignment(Entities.MM, Domains.OnPremise) to +1,
        Assignment(Entities.DM, Domains.OnPremise) to +1,

        Assignment(Entities.PR, Domains.Edge) to -1,
        Assignment(Entities.RM, Domains.Edge) to -1,
        Assignment(Entities.MM, Domains.Edge) to -1,
        Assignment(Entities.DM, Domains.Edge) to -1,

        Assignment(Entities.PR, Domains.Cloud) to +1,
        Assignment(Entities.RM, Domains.Cloud) to +1,
        Assignment(Entities.MM, Domains.Cloud) to +1,
        Assignment(Entities.DM, Domains.Cloud) to +1,
    ),
)

/** The impact of targets on each security requirement of the current scenario */
var securityPropertiesImpact: LinkedHashMap<SecurityProperties, LinkedHashMap<Targets, Impact>> = linkedMapOf(
    SecurityProperties.Confidentiality to linkedMapOf(
        Targets.PR to Impact.High,
        Targets.RM to Impact.None,
        Targets.MM to Impact.None,
        Targets.DM to Impact.Low,
        Targets.PR_RM to Impact.None,
        Targets.PR_DM to Impact.None,
        Targets.PR_MM to Impact.None,
        Targets.RM_MM to Impact.None,
        Targets.RM_DM to Impact.None,
        Targets.MM_DM to Impact.None,
    ),
    SecurityProperties.Integrity to linkedMapOf(
        Targets.PR to Impact.None,
        Targets.RM to Impact.None,
        Targets.MM to Impact.None,
        Targets.DM to Impact.None,
        Targets.PR_RM to Impact.None,
        Targets.PR_DM to Impact.None,
        Targets.PR_MM to Impact.None,
        Targets.RM_MM to Impact.None,
        Targets.RM_DM to Impact.None,
        Targets.MM_DM to Impact.None,
    ),
    SecurityProperties.Availability to linkedMapOf(
        Targets.PR to Impact.High,
        Targets.RM to Impact.High,
        Targets.MM to Impact.High,
        Targets.DM to Impact.Low,
        Targets.PR_RM to Impact.None,
        Targets.PR_DM to Impact.Low,
        Targets.PR_MM to Impact.High,
        Targets.RM_MM to Impact.High,
        Targets.RM_DM to Impact.Low,
        Targets.MM_DM to Impact.None,
    ),
)
