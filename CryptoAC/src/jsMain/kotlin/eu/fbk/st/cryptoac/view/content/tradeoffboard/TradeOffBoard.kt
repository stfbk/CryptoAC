package eu.fbk.st.cryptoac.view.content.tradeoffboard

/**
TODO in "TradeOffBoard", devi controllare le funzioni
- computePossibleArchitectures
- computeScoresArray
- getProtectionLevel
- orderArchitectures
- dominates
 */

import eu.fbk.st.cryptoac.view.Themes.plainPaperTitleStyle
import eu.fbk.st.cryptoac.view.components.custom.*
import eu.fbk.st.cryptoac.view.components.icons.faUndoAlt
import eu.fbk.st.cryptoac.view.components.materialui.grid
import eu.fbk.st.cryptoac.view.components.materialui.iconButton
import eu.fbk.st.cryptoac.view.components.materialui.tooltip
import eu.fbk.st.cryptoac.view.enumContains
import kotlinx.css.*
import mu.KotlinLogging
import react.*
import react.dom.*
import styled.*

private val logger = KotlinLogging.logger {}

external interface TradeOffBoardState : State {
    /** The possible assignments of domain-(list of entities) */
    var assignments: HashMap<Domains, MutableList<Entities>>

    /** The min-max number of instances for each entity */
    var numberOfInstances: HashMap<Entities, Array<Int>>

    /** The candidate architectures */
    var architectures: List<Architecture>

    /** The weight, threshold (type and value) and penalty for performance requirements */
    var performanceRequirementsInputs: List<Requirement>

    /** The weight, threshold (type and value) and penalty for security requirements */
    var securityRequirementsInputs: List<Requirement>

    /** The attackers of the current scenario */
    var attackersInput: LinkedHashMap<DomainsWithChannels, List<Attacker>>

    /** The domains of the current scenario */
    var domains: List<Domains>

    /** The entities of the current scenario */
    var entities: List<Entities>
}

external interface TradeOffBoardProps : Props {
    var handleChangeCircularProgressValue: (Int) -> Unit
    var handleChangeBackdropIsOpen: (Boolean) -> Unit
    var scenario: Scenario
    var algorithm: Algorithm
    var metric: Metric
}

/** The TradeOffBoard React component */
class TradeOffBoard : RComponent<TradeOffBoardProps, TradeOffBoardState>() {

    override fun RBuilder.render() {
        styledDiv {
            css {
                textAlign = TextAlign.center
                paddingTop = 10.px
                paddingBottom = 10.px
            }

            grid {
                attrs {
                    container = true
                    spacing = 3
                }

                grid {
                    attrs {
                        item = true
                        sm = 12
                        md = 12
                        lg = 12
                        xl = 12
                    }
                    /** Allow users to define how many instances of each entity to have */
                    child(
                        cryptoACPaper {
                            titleStyle = plainPaperTitleStyle
                            titleText = "Replication of Entities"
                            titleVariant = "subtitle1"
                            setDivider = false
                            dividerWidth = 95.pct
                            child = createElement {

                                styledTable {
                                    css {
                                        borderCollapse = BorderCollapse.collapse
                                        width = 100.pct
                                    }
                                    /** The first row contains the titles */
                                    styledThead {
                                        css {
                                            borderBottom = "1px solid rgba(173, 173, 173, 0.2)"
                                        }
                                        tr {
                                            state.entities.forEach {
                                                styledTd {
                                                    css {
                                                        padding = "4px"
                                                    }
                                                    +it.toString()
                                                }
                                            }
                                        }
                                    }

                                    /** The rows are for the sliders */
                                    tbody {
                                        tr {
                                            state.entities.forEachIndexed { index, entity ->
                                                styledTd {
                                                    css {
                                                        if (index == 0) {
                                                            paddingTop = 3.px
                                                        } else if (index == state.entities.size - 1) {
                                                            paddingBottom = 3.px
                                                        }
                                                        if (index == state.entities.size - 1 && index == state.entities.size - 1) {
                                                            borderBottomRightRadius = 15.px
                                                        }
                                                    }

                                                    child(
                                                        cryptoACSlider {
                                                            label = ""
                                                            min = 0
                                                            max = state.domains.size
                                                            defaultValues = arrayOf(0, Domains.values().size)
                                                            color = "primary"
                                                            range = true
                                                            onChange = { newNumberOfInstances ->
                                                                changeNumberOfInstances(
                                                                    entity,
                                                                    newNumberOfInstances as Array<Int>
                                                                )
                                                            }
                                                        }
                                                    )
                                                }
                                            }
                                        }
                                    }
                                }
                            }!!
                        }
                    )
                }

                grid {
                    attrs {
                        item = true
                        sm = 12
                        md = 12
                        lg = 12
                        xl = 12
                    }
                    /** Allow users to set pre-filters */
                    child(
                        cryptoACPaper {
                            titleStyle = plainPaperTitleStyle
                            titleText = "Pre-filters"
                            titleVariant = "subtitle1"
                            setDivider = false
                            dividerWidth = 95.pct
                            child = createElement {

                                styledTable {
                                    css {
                                        borderCollapse = BorderCollapse.collapse
                                        width = 100.pct
                                    }
                                    /** The first row contains the entities */
                                    styledThead {
                                        css {
                                            borderBottom = "1px solid rgba(173, 173, 173, 0.2)"
                                        }
                                        tr {
                                            styledTd {
                                                css {
                                                    padding = "4px"
                                                }
                                            }
                                            state.entities.forEach {
                                                styledTd {
                                                    css {
                                                        padding = "4px"
                                                    }
                                                    +it.toString()
                                                }
                                            }
                                        }
                                    }

                                    /** The rows are for the domains */
                                    tbody {
                                        state.domains.forEachIndexed { index, domain ->
                                            tr {
                                                styledTd {
                                                    css {
                                                        paddingLeft = 10.px
                                                        width = 160.px
                                                        textAlign = TextAlign.left
                                                        if (index == state.domains.size - 1) {
                                                            borderBottomLeftRadius = 15.px
                                                        }
                                                    }
                                                    +domain.toString()
                                                }
                                                state.entities.forEachIndexed { entityIndex, entity ->
                                                    styledTd {
                                                        css {
                                                            if (index == 0) {
                                                                paddingTop = 3.px
                                                            } else if (index == state.domains.size - 1) {
                                                                paddingBottom = 3.px
                                                            }
                                                            if (index == state.domains.size - 1 && entityIndex == state.entities.size - 1) {
                                                                borderBottomRightRadius = 15.px
                                                            }
                                                        }
                                                        child(
                                                            entityIcon {
                                                                key = state.domains.toString() + state.entities.toString()
                                                                src = getImageFromEntity(entity)
                                                                onClick = { entity, domain, assignment ->
                                                                    toggleAssignment(entity, domain, assignment)
                                                                }
                                                                this.entity = entity
                                                                this.domain = domain
                                                            }
                                                        )
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }!!
                        }
                    )
                }
                grid {
                    attrs {
                        item = true
                        sm = 12
                        md = 12
                        lg = 12
                        xl = 12
                    }
                    /** Allow users to input trust assumptions */
                    child(
                        cryptoACPaper {
                            titleStyle = plainPaperTitleStyle
                            titleText = "Trust Assumptions"
                            titleVariant = "subtitle1"
                            setDivider = false
                            dividerWidth = 95.pct
                            child = createElement {
                                styledTable {
                                    css {
                                        borderCollapse = BorderCollapse.collapse
                                        width = 100.pct
                                    }

                                    /** The first row contains the headers */
                                    styledThead {
                                        css {
                                            borderBottom = "1px solid rgba(173, 173, 173, 0.2)"
                                        }
                                        tr {
                                            styledTd {
                                                css {
                                                    padding = "4px"
                                                }
                                                +"Domain or Channel"
                                            }
                                            styledTd {
                                                css {
                                                    padding = "4px"
                                                }
                                                +"Attacker"
                                            }
                                            styledTd {
                                                css {
                                                    padding = "4px"
                                                }
                                                attrs {
                                                    colSpan = "2"
                                                }
                                                +"Likelihood"
                                            }
                                        }
                                    }

                                    /** Each row contains the attackers and likelihoods */
                                    tbody {
                                        val iterator = state.attackersInput.iterator()
                                        while (iterator.hasNext()) {
                                            val entry = iterator.next()
                                            val domain = entry.key
                                            val attackers = entry.value
                                            tr {
                                                styledTd {
                                                    css {
                                                        paddingLeft = 10.px
                                                        width = 160.px
                                                        textAlign = TextAlign.left
                                                        if (!iterator.hasNext()) {
                                                            borderBottomLeftRadius = 15.px
                                                        }
                                                    }
                                                    attrs {
                                                        rowSpan = attackers.size.toString()
                                                    }
                                                    +domain.toString()
                                                }
                                                child(
                                                    trustAssumptionsLikelihood {
                                                        this.defaultValue = Likelihood.High
                                                        this.last = attackers.size == 1 && !iterator.hasNext()
                                                        this.domain = domain
                                                        this.attacker = attackers.first().attacker
                                                        this.handleChangeLikelihood = { domain, attacker, newLikelihood ->
                                                            changeLikelihood(domain, attacker, newLikelihood)
                                                        }
                                                    }
                                                )
                                            }
                                            attackers.forEachIndexed { index, attacker ->
                                                if (index != 0) {
                                                    tr {
                                                        child(
                                                            trustAssumptionsLikelihood {
                                                                this.defaultValue = Likelihood.High
                                                                this.last = index == attackers.size - 1 && !iterator.hasNext()
                                                                this.domain = domain
                                                                this.attacker = attacker.attacker
                                                                this.handleChangeLikelihood = { domain, attacker, newLikelihood ->
                                                                    changeLikelihood(domain, attacker, newLikelihood)
                                                                }
                                                            }
                                                        )
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }!!
                        }
                    )
                }

                if (props.algorithm == Algorithm.AdHoc) {

                    grid {
                        attrs {
                            item = true
                            sm = 12
                            md = 12
                            lg = 12
                            xl = 12
                        }
                        /** Allow users to input weights and constraints for requirements */
                        child(
                            cryptoACPaper {
                                titleStyle = plainPaperTitleStyle
                                titleText = when (props.metric) {
                                    Metric.Protection -> "Security Requirements"
                                    Metric.Goals -> "Scenario Requirements"
                                }
                                titleVariant = "subtitle1"
                                setDivider = false
                                dividerWidth = 95.pct
                                child = createElement {
                                    styledTable {
                                        css {
                                            borderCollapse = BorderCollapse.collapse
                                            width = 100.pct
                                        }

                                        /** The first row contains the headers */
                                        styledThead {
                                            css {
                                                borderBottom = "1px solid rgba(173, 173, 173, 0.2)"
                                            }
                                            tr {
                                                styledTd {
                                                    css {
                                                        padding = "4px"
                                                    }
                                                }
                                                styledTd {
                                                    css {
                                                        padding = "4px"
                                                    }
                                                    +"Weight"
                                                }
                                                styledTd {
                                                    css {
                                                        padding = "4px"
                                                    }
                                                    +"Threshold"
                                                }
                                                styledTd {
                                                    css {
                                                        padding = "4px"
                                                    }
                                                    +"Threshold Value"
                                                }
                                                styledTd {
                                                    css {
                                                        padding = "4px"
                                                    }
                                                    +"Penalty"
                                                }
                                            }
                                        }

                                        /** Each row contains the attackers and likelihoods */
                                        tbody {

                                            val requirements = when (props.metric) {
                                                Metric.Goals -> state.performanceRequirementsInputs
                                                Metric.Protection -> state.securityRequirementsInputs
                                            }

                                            requirements.forEachIndexed { index, req ->
                                                key = req.name
                                                tr {
                                                    child(
                                                        requirementItem {
                                                            defaultValue = when (props.metric) {
                                                                Metric.Goals -> state.performanceRequirementsInputs
                                                                Metric.Protection -> state.securityRequirementsInputs
                                                            }.first { it.name == req.name }
                                                            last = index == requirements.size - 1
                                                            requirement = req
                                                            handleChangeWeightValue = { weight ->
                                                                changeWeightValue(req.name, weight)
                                                            }
                                                            handleChangeThresholdType = { type ->
                                                                changeThresholdType(req.name, type)
                                                            }
                                                            handleChangeThresholdValue = { threshold ->
                                                                changeThresholdValue(req.name, threshold)
                                                            }
                                                            handleChangePenaltyValue = { penalty ->
                                                                changePenaltyValue(req.name, penalty)
                                                            }
                                                        }
                                                    )
                                                }
                                            }
                                        }
                                    }
                                }!!
                            }
                        )
                    }
                }
            }

            br { }

            /** The ranking of architectures */
            child(
                cryptoACPaper {
                    titleStyle = plainPaperTitleStyle
                    titleText = "Best Architectures"
                    titleVariant = "subtitle1"
                    setDivider = false
                    dividerWidth = 95.pct
                    child = createElement {
                        styledDiv {
                            css {
                                float = Float.right
                            }
                            iconButton {
                                attrs {
                                    size = "small"
                                    label = "refresh"
                                    color = "secondary"
                                    onClick = {
                                        // TODO the backdrop does not work => I think
                                        //  "computePossibleArchitectures" takes too
                                        //  much CPU resources and thus React does not
                                        //  render
                                        props.handleChangeBackdropIsOpen(true)
                                        val newArchitectures = computePossibleArchitectures()
                                        props.handleChangeBackdropIsOpen(false)
                                        setState {
                                            architectures = newArchitectures
                                        }
                                    }
                                }
                                child(createElement<Props> { faUndoAlt { } }!!)
                            }
                        }

                        styledTable {
                            css {
                                borderCollapse = BorderCollapse.collapse
                                width = 100.pct
                            }
                            /** The first row contains the domains */
                            styledThead {
                                css {
                                    borderBottom = "1px solid rgba(173, 173, 173, 0.2)"
                                }
                                tr {
                                    state.domains.forEach {
                                        styledTd {
                                            css {
                                                padding = "4px"
                                            }
                                            +it.toString()
                                        }
                                    }
                                    styledTd {
                                        css {
                                            padding = "4px"
                                        }
                                        +"Score"
                                    }
                                }
                            }

                            tbody {
                                val architecturesToShow = state.architectures
                                logger.info { "Showing ${architecturesToShow.size} architectures" }
                                architecturesToShow.forEachIndexed { architectureIndex, architecture ->
                                    tr {
                                        state.domains.forEachIndexed { domainIndex, domain ->
                                            val entitiesInDomain = architecture.arcs[domain] ?: listOf()
                                            styledTd {
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
                                                    child(
                                                        entityIcon {
                                                            src = getImageFromEntity(entity)
                                                        }
                                                    )
                                                }
                                            }
                                        }

                                        styledTd {
                                            css {
                                                if (architectureIndex == 0) {
                                                    paddingTop = 3.px
                                                } else if (architectureIndex == architecturesToShow.size - 1) {
                                                    paddingBottom = 3.px
                                                    borderBottomRightRadius = 15.px
                                                }
                                            }
                                            if (props.algorithm == Algorithm.AdHoc) {
                                                +architecture.requirementsScore.toString()
                                            } else if (props.algorithm == Algorithm.Best) {
                                                architecture.arrayRequirementsScore.forEach {

                                                    val score = it.value

                                                    tooltip {
                                                        attrs {
                                                            title = it.key.replace("_", "-")
                                                        }
                                                        child(
                                                            createElement<Props> {
                                                                styledSpan {
                                                                    css {
                                                                        marginRight = 0.5.em
                                                                        fontFamily = "Courier"
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
                                                                    +"${(if (score >= 0) { "+" } else { "" })}$score"
                                                                }
                                                            }!!
                                                        )
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }!!
                }
            )
        }
    }

    /**
     * Change the number of instances possible
     * for [entity] to the given [newNumberOfInstances]
     */
    private fun changeNumberOfInstances(entity: Entities, newNumberOfInstances: Array<Int>) {
        logger.info { "changeNumberOfInstances, entity $entity, newNumberOfInstances $newNumberOfInstances" }
        setState { numberOfInstances[entity] = newNumberOfInstances }
    }

    /**
     * Change the penalty value of the
     * [requirement] to the given [penalty]
     */
    private fun changePenaltyValue(requirement: String, penalty: Int) {
        logger.info { "changePenalty, requirement $requirement, penalty $penalty" }
        setState {
            when (props.metric) {
                Metric.Goals -> state.performanceRequirementsInputs
                Metric.Protection -> state.securityRequirementsInputs
            }.first { it.name == requirement }.penalty = penalty
        }
    }

    /**
     * Change the threshold value of the
     * [requirement] to the given [value]
     */
    private fun changeThresholdValue(requirement: String, value: Int) {
        logger.info { "changeThresholdValue, requirement $requirement, value $value" }
        setState {
            when (props.metric) {
                Metric.Goals -> state.performanceRequirementsInputs
                Metric.Protection -> state.securityRequirementsInputs
            }.first { it.name == requirement }.thresholdValue = value
        }
    }

    /**
     * Change the threshold type of the
     * [requirement] to the given [threshold]
     */
    private fun changeThresholdType(requirement: String, threshold: Threshold) {
        logger.info { "changeThresholdType, requirement $requirement, threshold $threshold" }
        setState {
            when (props.metric) {
                Metric.Goals -> state.performanceRequirementsInputs
                Metric.Protection -> state.securityRequirementsInputs
            }.first { it.name == requirement }.thresholdType = threshold
        }
    }

    /**
     * Change the weight value of the
     * [requirement] to the given [weight]
     */
    private fun changeWeightValue(requirement: String, weight: Int) {
        logger.info { "changeWeight, requirement $requirement, weight $weight" }
        setState {
            when (props.metric) {
                Metric.Goals -> state.performanceRequirementsInputs
                Metric.Protection -> state.securityRequirementsInputs
            }.first { it.name == requirement }.weight = weight
        }
    }

    /**
     * Change the likelihood of the [attacker] threatening
     * the given [domain] to the given [newLikelihood]
     */
    private fun changeLikelihood(domain: DomainsWithChannels, attacker: Attackers, newLikelihood: Likelihood) {
        logger.info { "ChangeLikelihood, domain $domain, attacker $attacker, newLikelihood $newLikelihood" }
        setState {
            attackersInput[domain]!!.first { it.attacker == attacker }.likelihood = newLikelihood
        }
    }

    /**
     * Toggle the assignment of the [entity]
     * to the [domain] to the given value [accepted] */
    private fun toggleAssignment(entity: Entities, domain: Domains, accepted: Boolean) {
        logger.info { "ToggleAssignment, entity $entity, domain $domain, accepted $accepted" }
        setState {
            if (accepted) {
                assignments[domain]!!.add(entity)
            } else {
                assignments[domain]!!.remove(entity)
            }
        }
    }

    /**
     * Compute the list of possible architectures based on
     * the thresholds and pre-filters given, and evaluate
     * them (either Best or AdHoc)
     */
    private fun computePossibleArchitectures(): List<Architecture> {

        if (state == undefined) { return listOf() }

        logger.info { "Derive the list of possible assignments in the form of <domain, entity> tuples" }
        val possibleAssignments: MutableList<Assignment> = mutableListOf()
        state.assignments.forEach { entry ->
            val domain = entry.key
            entry.value.forEach { entity ->
                possibleAssignments.add(Assignment(domain, entity))
            }
        }

        props.handleChangeCircularProgressValue(50)

        logger.info { "Compute the power set of possible assignments, so to have all possible architectures" }
        val assignmentsPowerSet = possibleAssignments.powerSet()

        props.handleChangeCircularProgressValue(90)

        logger.info { "Compute the score of each architecture for each (security or performance) requirement" }
        val architectures: MutableList<Architecture> = mutableListOf()
        assignmentsPowerSet.forEach { currentArchitecture ->

            /** Count the number of entities in this architecture */
            val numberOfEntities: HashMap<Entities, Int> = hashMapOf()
            state.entities.forEach {
                numberOfEntities[it] = 0
            }
            currentArchitecture.forEach {
                numberOfEntities[it.entity] = numberOfEntities[it.entity]!! + 1
            }

            /** Check whether the architecture respects the limits of entities */
            var discardArchitecture = false
            state.numberOfInstances.forEach {
                val numberOfEntity = numberOfEntities[it.key]!!
                val minNumberOfEntity = it.value[0]
                val maxNumberOfEntity = it.value[1]
                if (numberOfEntity < minNumberOfEntity || numberOfEntity > maxNumberOfEntity) {
                    discardArchitecture = true
                }
            }

            /** If the architecture respects the limits of entities */
            if (!discardArchitecture) {

                val architecture = Architecture.architectureFromAssignments(currentArchitecture.toList())
                val scoresArray = computeScoresArray(currentArchitecture)

                var excludeArchitecture = false
                if (props.algorithm == Algorithm.AdHoc) {
                    // logger.info { "As algorithm is AdHoc, apply the weights, thresholds and penalty" }
                    var finalScore = 0

                    scoresArray.forEach { entry ->
                        val requirementName = entry.key
                        // logger.info { "Requirement is $requirementName" }
                        var tempScore = entry.value

                        val requirement = when (props.metric) {
                            Metric.Goals -> state.performanceRequirementsInputs
                            Metric.Protection -> state.securityRequirementsInputs
                        }.first { it.name == requirementName }

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
                } else if (props.algorithm == Algorithm.Best) {
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

        if (props.metric == Metric.Goals) {

            performanceRequirementsImpact.forEach { entry ->

                val requirementName = entry.key
                // logger.info { "Requirement is $requirementName" }
                var score = 0
                val assignmentsAndImpact = entry.value
                currentArchitecture.forEach { assignment ->
                    // logger.info { "Assignment is $assignment" }

                    val requirement = state.performanceRequirementsInputs.first { it.name == requirementName.name }

                    score += (
                        assignmentsAndImpact[assignment]!! * (
                            if (props.algorithm == Algorithm.AdHoc) {
                                requirement.weight
                            } else {
                                1
                            }
                            )
                        )
                }
                scoresArray[requirementName.toString()] = score
            }
        } else if (props.metric == Metric.Protection) {
            securityRequirementsImpact.forEach { securityRequirementImpact ->
                val requirementName = securityRequirementImpact.key.toString()
                // logger.info { "Requirement is $requirementName" }
                var score = 3
                val targetAndImpact = securityRequirementImpact.value
                state.attackersInput.forEach { domainsAndAttackers ->
                    val domain = domainsAndAttackers.key
                    val attackers = domainsAndAttackers.value

                    attackers.forEach { attacker ->

                        /** The attackers operate in a single domain */
                        if (enumContains<Domains>(domain.toString())) {
                            /** For each entity in that domain */
                            val convertedDomain = Domains.valueOf(domain.toString())
                            currentArchitecture.filter { it.domain == convertedDomain }.forEach {
                                val entityInDomain = it.entity
                                val convertedEntity = EntitiesWithChannels.valueOf(entityInDomain.toString())

                                /** The attacker threatens that entity */
                                score = minOf(
                                    score,
                                    getProtectionLevel(targetAndImpact[convertedEntity]!!, attacker.likelihood)
                                )
                            }
                        }
                        /** The attackers operate in a communication channel between two domains */
                        else {
                            val firstDomainString = domain.toString().split("_")[0]
                            val secondDomainString = domain.toString().split("_")[1]
                            val firstDomain = Domains.valueOf(firstDomainString)
                            val secondDomain = Domains.valueOf(secondDomainString)

                            val entitiesInFirstDomain = mutableListOf<Entities>()
                            val entitiesInSecondDomain = mutableListOf<Entities>()
                            currentArchitecture.forEach {
                                if (it.domain == firstDomain) {
                                    entitiesInFirstDomain.add(it.entity)
                                } else if (it.domain == secondDomain) {
                                    entitiesInSecondDomain.add(it.entity)
                                }
                            }

                            entitiesInFirstDomain.forEach { firstEntity ->
                                entitiesInSecondDomain.forEach { secondEntity ->

                                    val entityWithChannel = EntitiesWithChannels.valueOf("${firstEntity}_$secondEntity")
                                    val entityWithChannelReverse = EntitiesWithChannels.valueOf("${secondEntity}_$firstEntity")

                                    var eventualImpact = targetAndImpact[entityWithChannel]
                                    if (eventualImpact == null) {
                                        eventualImpact = targetAndImpact[entityWithChannelReverse]
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
                    if (props.algorithm == Algorithm.AdHoc) {
                        when (props.metric) {
                            Metric.Goals -> state.performanceRequirementsInputs
                            Metric.Protection -> state.securityRequirementsInputs
                        }.first { it.name == requirementName }.weight
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

    private fun orderArchitectures(possibleArchitectures: MutableList<Architecture>): MutableList<Architecture> {

        logger.info { "${possibleArchitectures.size} architectures are being ordered" }

        return when (props.algorithm) {
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
            if (dominatee[it.key]!! > it.value) {
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
        domains = Domains.values().toMutableList()
        entities = Entities.values().toMutableList()
        performanceRequirementsInputs = PerformanceRequirements.values().map { Requirement(it.toString()) }
        securityRequirementsInputs = SecurityRequirements.values().map { Requirement(it.toString()) }
        attackersInput = linkedMapOf(
            DomainsWithChannels.Client to listOf(Attacker(Attackers.MatD)),
            DomainsWithChannels.ESP to listOf(Attacker(Attackers.Insider)),
            DomainsWithChannels.OnPremise to listOf(Attacker(Attackers.Insider)),
            DomainsWithChannels.CSP to listOf(Attacker(Attackers.Insider)),
            DomainsWithChannels.Client_ESP to listOf(Attacker(Attackers.MitM)),
            DomainsWithChannels.Client_OnPremise to listOf(Attacker(Attackers.MitM)),
            DomainsWithChannels.Client_CSP to listOf(Attacker(Attackers.MitM)),
            DomainsWithChannels.ESP_OnPremise to listOf(Attacker(Attackers.MitM)),
            DomainsWithChannels.ESP_CSP to listOf(Attacker(Attackers.MitM)),
            DomainsWithChannels.OnPremise_CSP to listOf(Attacker(Attackers.MitM)),
        )
        numberOfInstances = HashMap()
        Entities.values().forEach { numberOfInstances[it] = arrayOf(0, Domains.values().size) }

        assignments = HashMap()
        Domains.values().forEach { assignments[it] = Entities.values().toMutableList() }
        architectures = listOf()
    }
}

fun tradeOffBoard(handler: TradeOffBoardProps.() -> Unit): ReactElement<Props> {
    return createElement {
        child(TradeOffBoard::class) {
            this.attrs(handler)
        }
    }!!
}

// TODO doc below
enum class Scenario { CryptoAC, MQTT }

enum class Algorithm { Best, AdHoc }

enum class Metric { Goals, Protection }

enum class Domains { Client, ESP, OnPremise, CSP }

enum class DomainsWithChannels { Client, ESP, OnPremise, CSP, Client_ESP, Client_OnPremise, Client_CSP, ESP_OnPremise, ESP_CSP, OnPremise_CSP }

enum class Entities { CryptoAC, RM, MM, DM }

enum class EntitiesWithChannels { CryptoAC, RM, MM, DM, CryptoAC_RM, CryptoAC_DM, CryptoAC_MM, RM_MM, RM_DM, MM_DM }

enum class Attackers { MitM, Insider, MatD }

enum class Likelihood { High, Medium, Low, None }

enum class Impact { High, Medium, Low, None }

enum class Threshold { None, Soft, Hard }

enum class SecurityRequirements { Confidentiality, Integrity, Availability }

enum class PerformanceRequirements {
    Redundancy,
    Scalability,
    Reliability,
    Maintenance,
    DoS_Resilience,
    CSP_Vendor_Lock_in,
    On_premise_Savings,
    CSP_Savings,
    Latency,
    Throughput,
    Computational_Power,
    Storage_capacity,
    ESP_Vendor_Lock_in,
    ESP_Savings,
}

fun getImageFromEntity(entity: Entities) = when (entity) {
    Entities.CryptoAC -> "proxy.png"
    Entities.RM -> "rm.png"
    Entities.MM -> "mm.png"
    Entities.DM -> "dm.png"
}

/** The impact of assignments on each performance requirement of the current scenario */
var performanceRequirementsImpact: HashMap<PerformanceRequirements, HashMap<Assignment, Int>> = hashMapOf(
    PerformanceRequirements.Redundancy to hashMapOf(
        Assignment(Domains.Client, Entities.CryptoAC) to 0,
        Assignment(Domains.Client, Entities.RM) to 0,
        Assignment(Domains.Client, Entities.MM) to 0,
        Assignment(Domains.Client, Entities.DM) to 0,

        Assignment(Domains.OnPremise, Entities.CryptoAC) to 0,
        Assignment(Domains.OnPremise, Entities.RM) to -1,
        Assignment(Domains.OnPremise, Entities.MM) to -1,
        Assignment(Domains.OnPremise, Entities.DM) to -1,

        Assignment(Domains.ESP, Entities.CryptoAC) to 0,
        Assignment(Domains.ESP, Entities.RM) to 0,
        Assignment(Domains.ESP, Entities.MM) to 0,
        Assignment(Domains.ESP, Entities.DM) to 0,

        Assignment(Domains.CSP, Entities.CryptoAC) to 0,
        Assignment(Domains.CSP, Entities.RM) to +1,
        Assignment(Domains.CSP, Entities.MM) to +1,
        Assignment(Domains.CSP, Entities.DM) to +1,
    ),
    PerformanceRequirements.Scalability to hashMapOf(
        Assignment(Domains.Client, Entities.CryptoAC) to 0,
        Assignment(Domains.Client, Entities.RM) to 0,
        Assignment(Domains.Client, Entities.MM) to 0,
        Assignment(Domains.Client, Entities.DM) to 0,

        Assignment(Domains.OnPremise, Entities.CryptoAC) to 0,
        Assignment(Domains.OnPremise, Entities.RM) to -1,
        Assignment(Domains.OnPremise, Entities.MM) to -1,
        Assignment(Domains.OnPremise, Entities.DM) to -1,

        Assignment(Domains.ESP, Entities.CryptoAC) to 0,
        Assignment(Domains.ESP, Entities.RM) to 0,
        Assignment(Domains.ESP, Entities.MM) to 0,
        Assignment(Domains.ESP, Entities.DM) to 0,

        Assignment(Domains.CSP, Entities.CryptoAC) to 0,
        Assignment(Domains.CSP, Entities.RM) to +1,
        Assignment(Domains.CSP, Entities.MM) to +1,
        Assignment(Domains.CSP, Entities.DM) to +1,
    ),
    PerformanceRequirements.Reliability to hashMapOf(
        Assignment(Domains.Client, Entities.CryptoAC) to 0,
        Assignment(Domains.Client, Entities.RM) to 0,
        Assignment(Domains.Client, Entities.MM) to 0,
        Assignment(Domains.Client, Entities.DM) to 0,

        Assignment(Domains.OnPremise, Entities.CryptoAC) to 0,
        Assignment(Domains.OnPremise, Entities.RM) to -1,
        Assignment(Domains.OnPremise, Entities.MM) to -1,
        Assignment(Domains.OnPremise, Entities.DM) to -1,

        Assignment(Domains.ESP, Entities.CryptoAC) to 0,
        Assignment(Domains.ESP, Entities.RM) to 0,
        Assignment(Domains.ESP, Entities.MM) to 0,
        Assignment(Domains.ESP, Entities.DM) to 0,

        Assignment(Domains.CSP, Entities.CryptoAC) to 0,
        Assignment(Domains.CSP, Entities.RM) to +1,
        Assignment(Domains.CSP, Entities.MM) to +1,
        Assignment(Domains.CSP, Entities.DM) to +1,
    ),
    PerformanceRequirements.Maintenance to hashMapOf(
        Assignment(Domains.Client, Entities.CryptoAC) to 0,
        Assignment(Domains.Client, Entities.RM) to 0,
        Assignment(Domains.Client, Entities.MM) to 0,
        Assignment(Domains.Client, Entities.DM) to 0,

        Assignment(Domains.OnPremise, Entities.CryptoAC) to 0,
        Assignment(Domains.OnPremise, Entities.RM) to -1,
        Assignment(Domains.OnPremise, Entities.MM) to -1,
        Assignment(Domains.OnPremise, Entities.DM) to -1,

        Assignment(Domains.ESP, Entities.CryptoAC) to 0,
        Assignment(Domains.ESP, Entities.RM) to 0,
        Assignment(Domains.ESP, Entities.MM) to 0,
        Assignment(Domains.ESP, Entities.DM) to 0,

        Assignment(Domains.CSP, Entities.CryptoAC) to 0,
        Assignment(Domains.CSP, Entities.RM) to +1,
        Assignment(Domains.CSP, Entities.MM) to +1,
        Assignment(Domains.CSP, Entities.DM) to +1,
    ),
    PerformanceRequirements.DoS_Resilience to hashMapOf(
        Assignment(Domains.Client, Entities.CryptoAC) to 0,
        Assignment(Domains.Client, Entities.RM) to 0,
        Assignment(Domains.Client, Entities.MM) to 0,
        Assignment(Domains.Client, Entities.DM) to 0,

        Assignment(Domains.OnPremise, Entities.CryptoAC) to 0,
        Assignment(Domains.OnPremise, Entities.RM) to -1,
        Assignment(Domains.OnPremise, Entities.MM) to -1,
        Assignment(Domains.OnPremise, Entities.DM) to -1,

        Assignment(Domains.ESP, Entities.CryptoAC) to 0,
        Assignment(Domains.ESP, Entities.RM) to 0,
        Assignment(Domains.ESP, Entities.MM) to 0,
        Assignment(Domains.ESP, Entities.DM) to 0,

        Assignment(Domains.CSP, Entities.CryptoAC) to 0,
        Assignment(Domains.CSP, Entities.RM) to +1,
        Assignment(Domains.CSP, Entities.MM) to +1,
        Assignment(Domains.CSP, Entities.DM) to +1,
    ),
    PerformanceRequirements.On_premise_Savings to hashMapOf(
        Assignment(Domains.Client, Entities.CryptoAC) to 0,
        Assignment(Domains.Client, Entities.RM) to 0,
        Assignment(Domains.Client, Entities.MM) to 0,
        Assignment(Domains.Client, Entities.DM) to 0,

        Assignment(Domains.OnPremise, Entities.CryptoAC) to 0,
        Assignment(Domains.OnPremise, Entities.RM) to -1,
        Assignment(Domains.OnPremise, Entities.MM) to -1,
        Assignment(Domains.OnPremise, Entities.DM) to -1,

        Assignment(Domains.ESP, Entities.CryptoAC) to 0,
        Assignment(Domains.ESP, Entities.RM) to 0,
        Assignment(Domains.ESP, Entities.MM) to 0,
        Assignment(Domains.ESP, Entities.DM) to 0,

        Assignment(Domains.CSP, Entities.CryptoAC) to 0,
        Assignment(Domains.CSP, Entities.RM) to +1,
        Assignment(Domains.CSP, Entities.MM) to +1,
        Assignment(Domains.CSP, Entities.DM) to +1,
    ),
    PerformanceRequirements.CSP_Vendor_Lock_in to hashMapOf(
        Assignment(Domains.Client, Entities.CryptoAC) to 0,
        Assignment(Domains.Client, Entities.RM) to 0,
        Assignment(Domains.Client, Entities.MM) to 0,
        Assignment(Domains.Client, Entities.DM) to 0,

        Assignment(Domains.OnPremise, Entities.CryptoAC) to 0,
        Assignment(Domains.OnPremise, Entities.RM) to -1,
        Assignment(Domains.OnPremise, Entities.MM) to -1,
        Assignment(Domains.OnPremise, Entities.DM) to -1,

        Assignment(Domains.ESP, Entities.CryptoAC) to 0,
        Assignment(Domains.ESP, Entities.RM) to 0,
        Assignment(Domains.ESP, Entities.MM) to 0,
        Assignment(Domains.ESP, Entities.DM) to 0,

        Assignment(Domains.CSP, Entities.CryptoAC) to 0,
        Assignment(Domains.CSP, Entities.RM) to +1,
        Assignment(Domains.CSP, Entities.MM) to +1,
        Assignment(Domains.CSP, Entities.DM) to +1,
    ),
    PerformanceRequirements.CSP_Savings to hashMapOf(
        Assignment(Domains.Client, Entities.CryptoAC) to 0,
        Assignment(Domains.Client, Entities.RM) to 0,
        Assignment(Domains.Client, Entities.MM) to 0,
        Assignment(Domains.Client, Entities.DM) to 0,

        Assignment(Domains.OnPremise, Entities.CryptoAC) to 0,
        Assignment(Domains.OnPremise, Entities.RM) to -1,
        Assignment(Domains.OnPremise, Entities.MM) to -1,
        Assignment(Domains.OnPremise, Entities.DM) to -1,

        Assignment(Domains.ESP, Entities.CryptoAC) to 0,
        Assignment(Domains.ESP, Entities.RM) to 0,
        Assignment(Domains.ESP, Entities.MM) to 0,
        Assignment(Domains.ESP, Entities.DM) to 0,

        Assignment(Domains.CSP, Entities.CryptoAC) to 0,
        Assignment(Domains.CSP, Entities.RM) to +1,
        Assignment(Domains.CSP, Entities.MM) to +1,
        Assignment(Domains.CSP, Entities.DM) to +1,
    ),

    PerformanceRequirements.Latency to hashMapOf(
        Assignment(Domains.Client, Entities.CryptoAC) to 0,
        Assignment(Domains.Client, Entities.RM) to 0,
        Assignment(Domains.Client, Entities.MM) to 0,
        Assignment(Domains.Client, Entities.DM) to 0,

        Assignment(Domains.OnPremise, Entities.CryptoAC) to 0,
        Assignment(Domains.OnPremise, Entities.RM) to -1,
        Assignment(Domains.OnPremise, Entities.MM) to -1,
        Assignment(Domains.OnPremise, Entities.DM) to -1,

        Assignment(Domains.ESP, Entities.CryptoAC) to 0,
        Assignment(Domains.ESP, Entities.RM) to 0,
        Assignment(Domains.ESP, Entities.MM) to 0,
        Assignment(Domains.ESP, Entities.DM) to 0,

        Assignment(Domains.CSP, Entities.CryptoAC) to 0,
        Assignment(Domains.CSP, Entities.RM) to +1,
        Assignment(Domains.CSP, Entities.MM) to +1,
        Assignment(Domains.CSP, Entities.DM) to +1,
    ),
    PerformanceRequirements.Throughput to hashMapOf(
        Assignment(Domains.Client, Entities.CryptoAC) to 0,
        Assignment(Domains.Client, Entities.RM) to 0,
        Assignment(Domains.Client, Entities.MM) to 0,
        Assignment(Domains.Client, Entities.DM) to 0,

        Assignment(Domains.OnPremise, Entities.CryptoAC) to 0,
        Assignment(Domains.OnPremise, Entities.RM) to -1,
        Assignment(Domains.OnPremise, Entities.MM) to -1,
        Assignment(Domains.OnPremise, Entities.DM) to -1,

        Assignment(Domains.ESP, Entities.CryptoAC) to 0,
        Assignment(Domains.ESP, Entities.RM) to 0,
        Assignment(Domains.ESP, Entities.MM) to 0,
        Assignment(Domains.ESP, Entities.DM) to 0,

        Assignment(Domains.CSP, Entities.CryptoAC) to 0,
        Assignment(Domains.CSP, Entities.RM) to +1,
        Assignment(Domains.CSP, Entities.MM) to +1,
        Assignment(Domains.CSP, Entities.DM) to +1,
    ),
    PerformanceRequirements.Computational_Power to hashMapOf(
        Assignment(Domains.Client, Entities.CryptoAC) to 0,
        Assignment(Domains.Client, Entities.RM) to 0,
        Assignment(Domains.Client, Entities.MM) to 0,
        Assignment(Domains.Client, Entities.DM) to 0,

        Assignment(Domains.OnPremise, Entities.CryptoAC) to 0,
        Assignment(Domains.OnPremise, Entities.RM) to -1,
        Assignment(Domains.OnPremise, Entities.MM) to -1,
        Assignment(Domains.OnPremise, Entities.DM) to -1,

        Assignment(Domains.ESP, Entities.CryptoAC) to 0,
        Assignment(Domains.ESP, Entities.RM) to 0,
        Assignment(Domains.ESP, Entities.MM) to 0,
        Assignment(Domains.ESP, Entities.DM) to 0,

        Assignment(Domains.CSP, Entities.CryptoAC) to 0,
        Assignment(Domains.CSP, Entities.RM) to +1,
        Assignment(Domains.CSP, Entities.MM) to +1,
        Assignment(Domains.CSP, Entities.DM) to +1,
    ),
    PerformanceRequirements.Storage_capacity to hashMapOf(
        Assignment(Domains.Client, Entities.CryptoAC) to 0,
        Assignment(Domains.Client, Entities.RM) to 0,
        Assignment(Domains.Client, Entities.MM) to 0,
        Assignment(Domains.Client, Entities.DM) to 0,

        Assignment(Domains.OnPremise, Entities.CryptoAC) to 0,
        Assignment(Domains.OnPremise, Entities.RM) to -1,
        Assignment(Domains.OnPremise, Entities.MM) to -1,
        Assignment(Domains.OnPremise, Entities.DM) to -1,

        Assignment(Domains.ESP, Entities.CryptoAC) to 0,
        Assignment(Domains.ESP, Entities.RM) to 0,
        Assignment(Domains.ESP, Entities.MM) to 0,
        Assignment(Domains.ESP, Entities.DM) to 0,

        Assignment(Domains.CSP, Entities.CryptoAC) to 0,
        Assignment(Domains.CSP, Entities.RM) to +1,
        Assignment(Domains.CSP, Entities.MM) to +1,
        Assignment(Domains.CSP, Entities.DM) to +1,
    ),
    PerformanceRequirements.ESP_Vendor_Lock_in to hashMapOf(
        Assignment(Domains.Client, Entities.CryptoAC) to 0,
        Assignment(Domains.Client, Entities.RM) to 0,
        Assignment(Domains.Client, Entities.MM) to 0,
        Assignment(Domains.Client, Entities.DM) to 0,

        Assignment(Domains.OnPremise, Entities.CryptoAC) to 0,
        Assignment(Domains.OnPremise, Entities.RM) to -1,
        Assignment(Domains.OnPremise, Entities.MM) to -1,
        Assignment(Domains.OnPremise, Entities.DM) to -1,

        Assignment(Domains.ESP, Entities.CryptoAC) to 0,
        Assignment(Domains.ESP, Entities.RM) to 0,
        Assignment(Domains.ESP, Entities.MM) to 0,
        Assignment(Domains.ESP, Entities.DM) to 0,

        Assignment(Domains.CSP, Entities.CryptoAC) to 0,
        Assignment(Domains.CSP, Entities.RM) to +1,
        Assignment(Domains.CSP, Entities.MM) to +1,
        Assignment(Domains.CSP, Entities.DM) to +1,
    ),
    PerformanceRequirements.ESP_Savings to hashMapOf(
        Assignment(Domains.Client, Entities.CryptoAC) to 0,
        Assignment(Domains.Client, Entities.RM) to 0,
        Assignment(Domains.Client, Entities.MM) to 0,
        Assignment(Domains.Client, Entities.DM) to 0,

        Assignment(Domains.OnPremise, Entities.CryptoAC) to 0,
        Assignment(Domains.OnPremise, Entities.RM) to -1,
        Assignment(Domains.OnPremise, Entities.MM) to -1,
        Assignment(Domains.OnPremise, Entities.DM) to -1,

        Assignment(Domains.ESP, Entities.CryptoAC) to 0,
        Assignment(Domains.ESP, Entities.RM) to 0,
        Assignment(Domains.ESP, Entities.MM) to 0,
        Assignment(Domains.ESP, Entities.DM) to 0,

        Assignment(Domains.CSP, Entities.CryptoAC) to 0,
        Assignment(Domains.CSP, Entities.RM) to +1,
        Assignment(Domains.CSP, Entities.MM) to +1,
        Assignment(Domains.CSP, Entities.DM) to +1,
    ),
)

/** The impact of targets on each security requirement of the current scenario */
var securityRequirementsImpact: HashMap<SecurityRequirements, HashMap<EntitiesWithChannels, Impact>> = hashMapOf(
    SecurityRequirements.Confidentiality to hashMapOf(
        EntitiesWithChannels.CryptoAC to Impact.High,
        EntitiesWithChannels.RM to Impact.None,
        EntitiesWithChannels.MM to Impact.None,
        EntitiesWithChannels.DM to Impact.None,
        EntitiesWithChannels.CryptoAC_RM to Impact.None,
        EntitiesWithChannels.CryptoAC_DM to Impact.None,
        EntitiesWithChannels.CryptoAC_MM to Impact.None,
        EntitiesWithChannels.RM_MM to Impact.None,
        EntitiesWithChannels.RM_DM to Impact.None,
        EntitiesWithChannels.MM_DM to Impact.None,
    ),
    SecurityRequirements.Integrity to hashMapOf(
        EntitiesWithChannels.CryptoAC to Impact.High,
        EntitiesWithChannels.RM to Impact.None,
        EntitiesWithChannels.MM to Impact.None,
        EntitiesWithChannels.DM to Impact.None,
        EntitiesWithChannels.CryptoAC_RM to Impact.None,
        EntitiesWithChannels.CryptoAC_DM to Impact.None,
        EntitiesWithChannels.CryptoAC_MM to Impact.None,
        EntitiesWithChannels.RM_MM to Impact.None,
        EntitiesWithChannels.RM_DM to Impact.None,
        EntitiesWithChannels.MM_DM to Impact.None,
    ),
    SecurityRequirements.Availability to hashMapOf(
        EntitiesWithChannels.CryptoAC to Impact.High,
        EntitiesWithChannels.RM to Impact.None,
        EntitiesWithChannels.MM to Impact.None,
        EntitiesWithChannels.DM to Impact.None,
        EntitiesWithChannels.CryptoAC_RM to Impact.None,
        EntitiesWithChannels.CryptoAC_DM to Impact.None,
        EntitiesWithChannels.CryptoAC_MM to Impact.None,
        EntitiesWithChannels.RM_MM to Impact.None,
        EntitiesWithChannels.RM_DM to Impact.None,
        EntitiesWithChannels.MM_DM to Impact.None,
    ),
)
