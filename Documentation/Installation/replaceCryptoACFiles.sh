rm -r ./CryptoAC/CryptoAC-1.0-SNAPSHOT
mv ../../CryptoAC/build/distributions/CryptoAC-1.0-SNAPSHOT.zip ./CryptoAC/
unzip ./CryptoAC/CryptoAC-1.0-SNAPSHOT.zip -d ./CryptoAC/
rm -r ./CryptoAC/CryptoAC-1.0-SNAPSHOT.zip
cp -r ./CryptoAC/server ./CryptoAC/CryptoAC-1.0-SNAPSHOT/
