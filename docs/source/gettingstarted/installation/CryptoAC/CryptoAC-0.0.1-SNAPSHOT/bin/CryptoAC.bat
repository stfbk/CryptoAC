@rem
@rem Copyright 2015 the original author or authors.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem      https://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.
@rem

@if "%DEBUG%" == "" @echo off
@rem ##########################################################################
@rem
@rem  CryptoAC startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%" == "" set DIRNAME=.
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%..

@rem Resolve any "." and ".." in APP_HOME to make it shorter.
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi

@rem Add default JVM options here. You can also use JAVA_OPTS and CRYPTO_AC_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS=

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if "%ERRORLEVEL%" == "0" goto execute

echo.
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto execute

echo.
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\lib\CryptoAC-jvm-0.0.1-SNAPSHOT.jar;%APP_HOME%\lib\ktor-serialization-kotlinx-json-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-client-serialization-jvm-2.1.1.jar;%APP_HOME%\lib\kotlinx-serialization-json-jvm-1.3.3.jar;%APP_HOME%\lib\ktor-serialization-kotlinx-xml-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-serialization-kotlinx-jvm-2.1.1.jar;%APP_HOME%\lib\xmlutil-serialization-jvm-0.84.0.jar;%APP_HOME%\lib\xmlutil-jvm-0.84.0.jar;%APP_HOME%\lib\ktor-server-tests-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-test-host-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-websockets-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-content-negotiation-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-status-pages-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-velocity-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-html-builder-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-sessions-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-netty-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-jetty-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-servlet-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-host-common-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-call-id-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-call-logging-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-default-headers-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-compression-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-auto-head-response-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-caching-headers-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-partial-content-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-conditional-headers-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-cors-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-data-conversion-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-double-receive-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-forwarded-header-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-hsts-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-http-redirect-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-method-override-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-server-core-jvm-2.1.1.jar;%APP_HOME%\lib\kotlin-reflect-1.7.10.jar;%APP_HOME%\lib\ktor-client-cio-jvm-2.1.1.jar;%APP_HOME%\lib\kotlinx-benchmark-runtime-jvm-0.4.2.jar;%APP_HOME%\lib\ktor-client-content-negotiation-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-client-json-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-client-jetty-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-client-core-jvm-2.1.1.jar;%APP_HOME%\lib\kotlin-logging-jvm-2.1.21.jar;%APP_HOME%\lib\multiplatform-crypto-libopenabe-bindings-jvm-0.0.20-SNAPSHOT.jar;%APP_HOME%\lib\ktor-network-tls-certificates-jvm-2.1.1.jar;%APP_HOME%\lib\multiplatform-crypto-libsodium-bindings-jvm-0.8.6.jar;%APP_HOME%\lib\ktor-http-cio-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-websocket-serialization-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-serialization-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-websockets-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-network-tls-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-events-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-http-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-network-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-utils-jvm-2.1.1.jar;%APP_HOME%\lib\kotlinx-html-jvm-0.7.5.jar;%APP_HOME%\lib\ktor-io-jvm-2.1.1.jar;%APP_HOME%\lib\ktor-test-dispatcher-jvm-2.1.1.jar;%APP_HOME%\lib\kotlinx-coroutines-jdk8-1.6.4.jar;%APP_HOME%\lib\kotlinx-coroutines-debug-1.6.4.jar;%APP_HOME%\lib\kotlinx-coroutines-core-jvm-1.6.4.jar;%APP_HOME%\lib\kotlinx-coroutines-slf4j-1.6.4.jar;%APP_HOME%\lib\kotlin-stdlib-jdk8-1.7.10.jar;%APP_HOME%\lib\kotlinx-serialization-core-jvm-1.3.3.jar;%APP_HOME%\lib\kotlin-stdlib-jdk7-1.7.10.jar;%APP_HOME%\lib\kotlin-test-1.6.20.jar;%APP_HOME%\lib\kotlin-stdlib-1.7.10.jar;%APP_HOME%\lib\kotlin-test-common-1.6.20.jar;%APP_HOME%\lib\kotlin-stdlib-common-1.7.10.jar;%APP_HOME%\lib\jmh-core-1.21.jar;%APP_HOME%\lib\security-logging-logback-1.1.7.jar;%APP_HOME%\lib\logback-classic-1.3.0-alpha14.jar;%APP_HOME%\lib\encoder-1.2.3.jar;%APP_HOME%\lib\jedis-4.0.1.jar;%APP_HOME%\lib\security-logging-common-1.1.7.jar;%APP_HOME%\lib\resource-loader-2.0.2.jar;%APP_HOME%\lib\velocity-tools-generic-3.1.jar;%APP_HOME%\lib\velocity-engine-core-2.3.jar;%APP_HOME%\lib\slf4j-api-2.0.0-alpha7.jar;%APP_HOME%\lib\janino-3.1.6.jar;%APP_HOME%\lib\org.eclipse.paho.mqttv5.client-1.2.5.jar;%APP_HOME%\lib\mysql-connector-java-8.0.28.jar;%APP_HOME%\lib\commons-cli-1.5.0.jar;%APP_HOME%\lib\jna-platform-5.9.0.jar;%APP_HOME%\lib\jna-5.11.0.jar;%APP_HOME%\lib\annotations-13.0.jar;%APP_HOME%\lib\jopt-simple-4.6.jar;%APP_HOME%\lib\commons-math3-3.2.jar;%APP_HOME%\lib\logback-core-1.3.0-alpha14.jar;%APP_HOME%\lib\commons-codec-1.13.jar;%APP_HOME%\lib\commons-compiler-3.1.6.jar;%APP_HOME%\lib\protobuf-java-3.11.4.jar;%APP_HOME%\lib\commons-pool2-2.11.1.jar;%APP_HOME%\lib\json-20211205.jar;%APP_HOME%\lib\gson-2.8.9.jar;%APP_HOME%\lib\config-1.4.2.jar;%APP_HOME%\lib\jansi-2.4.0.jar;%APP_HOME%\lib\netty-codec-http2-4.1.78.Final.jar;%APP_HOME%\lib\alpn-api-1.1.3.v20160715.jar;%APP_HOME%\lib\netty-transport-native-kqueue-4.1.78.Final.jar;%APP_HOME%\lib\netty-transport-native-epoll-4.1.78.Final.jar;%APP_HOME%\lib\jetty-alpn-java-server-9.4.48.v20220622.jar;%APP_HOME%\lib\jetty-alpn-openjdk8-server-9.4.48.v20220622.jar;%APP_HOME%\lib\jetty-alpn-server-9.4.48.v20220622.jar;%APP_HOME%\lib\http2-server-9.4.48.v20220622.jar;%APP_HOME%\lib\jetty-server-9.4.48.v20220622.jar;%APP_HOME%\lib\jetty-servlets-9.4.48.v20220622.jar;%APP_HOME%\lib\http2-http-client-transport-9.4.48.v20220622.jar;%APP_HOME%\lib\http2-client-9.4.48.v20220622.jar;%APP_HOME%\lib\jetty-alpn-openjdk8-client-9.4.48.v20220622.jar;%APP_HOME%\lib\jetty-alpn-java-client-9.4.48.v20220622.jar;%APP_HOME%\lib\netty-codec-http-4.1.78.Final.jar;%APP_HOME%\lib\netty-handler-4.1.78.Final.jar;%APP_HOME%\lib\netty-codec-4.1.78.Final.jar;%APP_HOME%\lib\netty-transport-classes-kqueue-4.1.78.Final.jar;%APP_HOME%\lib\netty-transport-classes-epoll-4.1.78.Final.jar;%APP_HOME%\lib\netty-transport-native-unix-common-4.1.78.Final.jar;%APP_HOME%\lib\netty-transport-4.1.78.Final.jar;%APP_HOME%\lib\netty-buffer-4.1.78.Final.jar;%APP_HOME%\lib\netty-resolver-4.1.78.Final.jar;%APP_HOME%\lib\netty-common-4.1.78.Final.jar;%APP_HOME%\lib\commons-lang3-3.11.jar;%APP_HOME%\lib\commons-digester3-3.2.jar;%APP_HOME%\lib\commons-beanutils-1.9.4.jar;%APP_HOME%\lib\json-simple-3.0.2.jar;%APP_HOME%\lib\javax.servlet-api-3.1.0.jar;%APP_HOME%\lib\http2-common-9.4.48.v20220622.jar;%APP_HOME%\lib\http2-hpack-9.4.48.v20220622.jar;%APP_HOME%\lib\jetty-client-9.4.48.v20220622.jar;%APP_HOME%\lib\jetty-http-9.4.48.v20220622.jar;%APP_HOME%\lib\jetty-alpn-client-9.4.48.v20220622.jar;%APP_HOME%\lib\jetty-io-9.4.48.v20220622.jar;%APP_HOME%\lib\jetty-continuation-9.4.48.v20220622.jar;%APP_HOME%\lib\jetty-util-9.4.48.v20220622.jar;%APP_HOME%\lib\commons-logging-1.2.jar;%APP_HOME%\lib\commons-collections-3.2.2.jar;%APP_HOME%\lib\junit-4.13.2.jar;%APP_HOME%\lib\hamcrest-core-1.3.jar;%APP_HOME%\lib\byte-buddy-1.10.9.jar;%APP_HOME%\lib\byte-buddy-agent-1.10.9.jar


@rem Execute CryptoAC
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %CRYPTO_AC_OPTS%  -classpath "%CLASSPATH%" eu.fbk.st.cryptoac.MainKt %*

:end
@rem End local scope for the variables with windows NT shell
if "%ERRORLEVEL%"=="0" goto mainEnd

:fail
rem Set variable CRYPTO_AC_EXIT_CONSOLE if you need the _script_ return code instead of
rem the _cmd.exe /c_ return code!
if  not "" == "%CRYPTO_AC_EXIT_CONSOLE%" exit 1
exit /b 1

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega
