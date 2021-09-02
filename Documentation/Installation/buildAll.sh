docker rmi cryptoac_mosquitto cryptoac_mysql cryptoac_opa cryptoac_cryptoac

for d in */ ; do
    cd $d
    chmod +x "./build.sh" 
    "./build.sh"
    cd ..
done