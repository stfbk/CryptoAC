import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpack

val kotlinVersion = "1.6.10"
val serializationVersion = "1.3.2"
val ktorVersion = "2.0.0-beta-1"
val libSodiumVersion = "0.8.4"
val junitVersion = "5.8.2"

var nativeTarget: org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTargetWithHostTests? = null
var jvmTarget: org.jetbrains.kotlin.gradle.targets.jvm.KotlinJvmTarget? = null

plugins {
    kotlin("multiplatform") version "1.6.10"
    application //to run JVM part
    kotlin("plugin.serialization") version "1.6.10"
    id("org.jetbrains.kotlinx.benchmark") version "0.4.2"
}

group = "eu.fbk.st"
version = "1.0-SNAPSHOT"

repositories {
    maven("https://repo.eclipse.org/content/repositories/paho-releases/")
    mavenCentral()
    maven("https://maven.pkg.jetbrains.space/kotlin/p/kotlin/kotlin-js-wrappers")
}



kotlin {
    jvmTarget = jvm {
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
    /*nativeTarget = linuxX64 {
        binaries {
            sharedLib()
        }

        val main by compilations.getting
        val libssl by main.cinterops.creating

        binaries {
            executable()
        }

        compilations["main"].cinterops.create("openssl") {
            val javaHome = File(System.getProperty("java.home")!!)
            packageName = "eu.fbk.st.cryptoac.crypto"
            includeDirs(
                Callable { File(javaHome, "include") },
                Callable { File(javaHome, "include/darwin") },
                Callable { File(javaHome, "include/linux") },
                Callable { File(javaHome, "include/win32") }
            )
        }
    }*/




    // TODO bisogna pulire tutte le dependencies ed eliminare quelle ridondanti/inutili
    sourceSets {
        val commonMain by getting {
            dependencies {

                //implementation(kotlin("stdlib-common"))
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-core:$serializationVersion")
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:$serializationVersion")
                implementation("io.ktor:ktor-client-core:$ktorVersion")
                implementation("io.ktor:ktor-client-content-negotiation:$ktorVersion")
                implementation("io.ktor:ktor-serialization-kotlinx-json:$ktorVersion")
                implementation("io.ktor:ktor-client-json:$ktorVersion")
                implementation("io.ktor:ktor-client-serialization:$ktorVersion")

                implementation("io.github.microutils:kotlin-logging:2.1.21")
                implementation("org.jetbrains.kotlin:kotlin-stdlib:$kotlinVersion")
                implementation("org.jetbrains.kotlin:kotlin-reflect:$kotlinVersion")
                implementation("org.jetbrains.kotlin:kotlin-stdlib-common:$kotlinVersion")

                implementation("org.jetbrains.kotlinx:kotlinx-benchmark-runtime:0.4.2")
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
                implementation("org.jetbrains.kotlin:kotlin-test-common:$kotlinVersion")
                implementation("org.jetbrains.kotlin:kotlin-test-annotations-common:$kotlinVersion")
            }
        }
        val jvmMain by getting {
            dependencies {
                implementation("io.ktor:ktor-serialization:$ktorVersion")
                implementation("io.ktor:ktor-server-core:$ktorVersion")
                implementation("io.ktor:ktor-server-netty:$ktorVersion")
                implementation("io.ktor:ktor-server-websockets:$ktorVersion")
                implementation("io.ktor:ktor-server-content-negotiation:$ktorVersion")
                implementation("io.ktor:ktor-server-status-pages:$ktorVersion")
                implementation("io.ktor:ktor-server-velocity:$ktorVersion")


                implementation(kotlin("stdlib-jdk8"))
                implementation("com.ionspin.kotlin:multiplatform-crypto-libsodium-bindings:$libSodiumVersion") {
                    exclude("org.jetbrains.kotlin", "kotlin-test-junit")
                }

                implementation("ch.qos.logback:logback-core:1.2.10")
                implementation("org.owasp.encoder:encoder:1.2.3")
                implementation("org.slf4j:slf4j-api:1.7.35")
                implementation("org.owasp:security-logging-logback:1.1.7")
                implementation("org.codehaus.janino:janino:3.1.6")
                implementation("io.github.microutils:kotlin-logging-jvm:2.1.21")

                // https://mvnrepository.com/artifact/org.eclipse.paho/org.eclipse.paho.mqttv5.client
                implementation("org.eclipse.paho:org.eclipse.paho.mqttv5.client:1.2.5")

                implementation("io.ktor:ktor-server-jetty:$ktorVersion")
                implementation("io.ktor:ktor-server-html-builder:$ktorVersion")
                implementation("io.ktor:ktor-server-sessions:$ktorVersion")
                implementation("io.ktor:ktor-server-tests:$ktorVersion")
                implementation("io.ktor:ktor-client-jetty:$ktorVersion")
                implementation("io.ktor:ktor-network-tls-certificates:$ktorVersion")

                implementation("mysql:mysql-connector-java:8.0.28")
                implementation("commons-cli:commons-cli:1.5.0")

                implementation("io.ktor:ktor-client-core-jvm:$ktorVersion")
                implementation("io.ktor:ktor-client-cio-jvm:$ktorVersion")

                implementation("redis.clients:jedis:4.0.1")
            }
        }
        val jvmTest by getting {
            dependencies {
                implementation("org.junit.jupiter:junit-jupiter-api:$junitVersion")
                implementation("org.junit.jupiter:junit-jupiter-engine:$junitVersion")
                implementation("org.junit.jupiter:junit-jupiter-params:$junitVersion")
                implementation("org.junit.jupiter:junit-jupiter:$junitVersion")
            }
        }
        val jsMain by getting {
            dependencies {
                implementation("io.ktor:ktor-client-js:$ktorVersion") //include http&websockets
                implementation("io.ktor:ktor-client-websockets:$ktorVersion")

                // ktor client js json
                //implementation("io.ktor:ktor-client-json-js:$ktorVersion")
                //implementation("io.ktor:ktor-client-serialization-js:$ktorVersion")

                implementation(npm("react", "17.0.2"))
                implementation(npm("react-dom", "17.0.2"))

                implementation("org.jetbrains.kotlin-wrappers:kotlin-react:17.0.2-pre.291-kotlin-$kotlinVersion")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-dom:17.0.2-pre.291-kotlin-$kotlinVersion")

                implementation("org.jetbrains.kotlin-wrappers:kotlin-styled:5.3.3-pre.291-kotlin-$kotlinVersion")
                implementation(npm("react-is", "17.0.2"))
                implementation(npm("styled-components", "5.3.3"))

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

                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.0")
            }
        }
    }
}

benchmark {
    targets {
        register("jvmTest")
        register("jvm")
        register("js")
    }
}

application {
    mainClass.set("eu.fbk.st.cryptoac.MainKt")
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
            apiVersion = "1.6"
            languageVersion = "1.6"
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
/*tasks.create("stage") {
    dependsOn(tasks.getByName("installDist"))
}*/

/** This adds options to the Run task */
tasks.getByName<JavaExec>("run") {

    /**  so that the JS artifacts generated by `jvmJar` can be found and served */
    classpath(tasks.getByName<Jar>("jvmJar"))


    /**
     * Before executing the Task, set the "java.library.path"
     * property to include .so libraries generated through
     * Kotlin Native
     */
    /*doFirst {
        systemProperty("java.library.path", nativeTarget!!.binaries.findSharedLib("debug")!!.outputDirectory)
    }*/
}

/** This adds options to Test Gradle tasks */
tasks.withType<Test> {
    /**
     * Specify that JUnit Platform (a.k.a. JUnit 5)
     * should be used to execute the tests
     */
    useJUnitPlatform()


    /**
     * Before executing the Task, set the "java.library.path"
     * property to include .so libraries generated through
     * Kotlin Native
     */
    /*doFirst {
        systemProperty("java.library.path", nativeTarget!!.binaries.findSharedLib("debug")!!.outputDirectory)
    }*/
}
