import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpack

val kotlinVersion = "1.5.10"
val serializationVersion = "1.2.1"
val ktorVersion = "1.6.0"

plugins {
    kotlin("multiplatform") version "1.5.10"
    application //to run JVM part
    kotlin("plugin.serialization") version "1.5.10"
}

group = "eu.fbk.st"
version = "1.0-SNAPSHOT"

repositories {
    maven("https://repo.eclipse.org/content/repositories/paho-releases/")
    maven("https://dl.bintray.com/kotlin/kotlin-eap")
    mavenCentral()
    jcenter()
    maven("https://maven.pkg.jetbrains.space/kotlin/p/kotlin/kotlin-js-wrappers")
    maven("https://kotlin.bintray.com/kotlin-js-wrappers/") // react, styled, ...
}
dependencies {
    implementation("org.junit.jupiter:junit-jupiter:5.7.0")
}


kotlin {
    jvm {
        withJava()
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
    }
    js {
        browser {
            binaries.executable()
            commonWebpackConfig {
                cssSupport.enabled = true
            }
        }
    }
    // TODO bisogna pulire tutte le dependencies ed eliminare quelle ridondanti/inutili
    sourceSets {
        val commonMain by getting {
            dependencies {
                //implementation(kotlin("stdlib-common"))
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-core:$serializationVersion")
                implementation("io.ktor:ktor-client-core:$ktorVersion")

                // TODO I ADDED
                implementation("io.github.microutils:kotlin-logging:2.0.8")
                implementation("org.jetbrains.kotlin:kotlin-stdlib:$kotlinVersion")
                implementation("org.jetbrains.kotlin:kotlin-reflect:$kotlinVersion")
                implementation("org.jetbrains.kotlin:kotlin-stdlib-common:$kotlinVersion")
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
            }
        }

        val jvmMain by getting {
            dependencies {
                implementation("io.ktor:ktor-serialization:$ktorVersion")
                implementation("io.ktor:ktor-server-core:$ktorVersion")
                implementation("io.ktor:ktor-server-netty:$ktorVersion")
                implementation("io.ktor:ktor-websockets:$ktorVersion")

                // TODO I ADDED
                implementation("ch.qos.logback:logback-core:1.2.3")
                implementation("org.owasp.encoder:encoder:1.2.3")
                implementation("org.slf4j:slf4j-api:1.7.30")
                implementation("org.owasp:security-logging-logback:1.1.6")
                implementation("org.codehaus.janino:janino:3.1.4")
                implementation("io.github.microutils:kotlin-logging-jvm:2.0.8")

                // https://mvnrepository.com/artifact/org.eclipse.paho/org.eclipse.paho.mqttv5.client
                implementation("org.eclipse.paho:org.eclipse.paho.mqttv5.client:1.2.5")

                // TODO server
                implementation("io.ktor:ktor-server-jetty:$ktorVersion")
                implementation("io.ktor:ktor-html-builder:$ktorVersion")
                implementation("io.ktor:ktor-server-sessions:$ktorVersion")
                implementation("io.ktor:ktor-server-tests:$ktorVersion")
                implementation("io.ktor:ktor-client-json:$ktorVersion")
                implementation("io.ktor:ktor-client-serialization:$ktorVersion")
                implementation("io.ktor:ktor-velocity:$ktorVersion")
                implementation("io.ktor:ktor-client-jetty:$ktorVersion")
                implementation("io.ktor:ktor-network-tls-certificates:$ktorVersion")

                implementation("mysql:mysql-connector-java:8.0.25")
                implementation("commons-cli:commons-cli:1.4")

                // TODO do not know if relevant, but these were in scope 'compile' in the old maven
                implementation("io.ktor:ktor-client-core-jvm:$ktorVersion")
                implementation("io.ktor:ktor-client-cio-jvm:$ktorVersion")
            }
        }

        val jsMain by getting {
            dependencies {
                implementation("io.ktor:ktor-client-js:$ktorVersion") //include http&websockets

                // ktor client js json
                implementation("io.ktor:ktor-client-json-js:$ktorVersion")
                implementation("io.ktor:ktor-client-serialization-js:$ktorVersion")

                implementation("org.jetbrains.kotlin-wrappers:kotlin-react:17.0.2-pre.209-kotlin-1.5.10")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-dom:17.0.2-pre.209-kotlin-1.5.10")

                implementation(npm("react", "17.0.2"))
                implementation(npm("react-dom", "17.0.2"))

                implementation("org.jetbrains.kotlin-wrappers:kotlin-styled:5.3.0-pre.209-kotlin-1.5.10")
                implementation(npm("react-is", "17.0.2"))
                implementation(npm("styled-components", "5.3.0"))

                // Material-ui core
                implementation(npm("@material-ui/core", "4.11.4"))
                implementation(npm("@material-ui/icons", "4.11.2"))
                implementation(npm("@material-ui/data-grid", "4.0.0-alpha.31"))
                implementation(npm("@material-ui/lab", "4.0.0-alpha.58"))


                implementation(npm("react-icons", "4.2.0"))
                implementation(npm("react-pro-sidebar", "0.6.0"))

                // TO BE ABLE TO PARSE SCSS
                implementation(npm("sass", "1.35.1"))
                implementation(npm("sass-loader", "12.1.0"))

                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.5.0")
            }
        }

        val jvmTest by getting {
            dependencies {
                implementation("org.junit.jupiter:junit-jupiter-api:5.7.2")
                implementation("org.junit.jupiter:junit-jupiter-engine:5.7.2")
                implementation("org.junit.jupiter:junit-jupiter-params:5.7.2")
            }
        }
    }
}

application {
    mainClassName = "eu.fbk.st.cryptoac.MainKt"
}

// include JS artifacts in any JAR we generate
tasks.getByName<Jar>("jvmJar") {
    val taskName = if (project.hasProperty("isProduction")) {
        "jsBrowserProductionWebpack"
    } else {
        "jsBrowserDevelopmentWebpack"
    }
    val webpackTask = tasks.getByName<KotlinWebpack>(taskName)
    dependsOn(webpackTask) // make sure JS gets compiled first
    from(File(webpackTask.destinationDirectory, webpackTask.outputFileName)) // bring output file along into the JAR
}

tasks {
    withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
        kotlinOptions {
            jvmTarget = "11"
            apiVersion = "1.5"
            languageVersion = "1.5"
        }
    }
}

distributions {
    main {
        contents {
            from("$buildDir/libs") {
                rename("${rootProject.name}-jvm", rootProject.name)
                into("lib")
            }
        }
    }
}

// Alias "installDist" as "stage" (for cloud providers)
tasks.create("stage") {
    dependsOn(tasks.getByName("installDist"))
}

tasks.getByName<JavaExec>("run") {
    classpath(tasks.getByName<Jar>("jvmJar")) // so that the JS artifacts generated by `jvmJar` can be found and served
}