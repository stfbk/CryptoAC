rm -r ./CryptoAC/CryptoAC-0.0.1-SNAPSHOT
mv ../../../../CryptoAC/build/distributions/CryptoAC-0.0.1-SNAPSHOT.zip ./CryptoAC/
unzip ./CryptoAC/CryptoAC-0.0.1-SNAPSHOT.zip -d ./CryptoAC/
rm -r ./CryptoAC/CryptoAC-0.0.1-SNAPSHOT.zip
cp -r ./CryptoAC/server ./CryptoAC/CryptoAC-0.0.1-SNAPSHOT/