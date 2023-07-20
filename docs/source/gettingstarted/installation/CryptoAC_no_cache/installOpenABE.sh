# Install OpenABE on Ubuntu 20.04

# run the following apt update and apt install only if you are
# not building with dockerfile DockerFileCryptoACWithOpenABE
# apt -y update
# apt -y install bison lsb-release git sudo python3-pip nano libgtest-dev -y

# manually install gtest (see https://github.com/zeutro/openabe/issues/61#issuecomment-868751392)
cd ~
g++ -I /usr/include/gtest -I /usr/src/gtest/ -c /usr/src/gtest/src/gtest-all.cc
ar -rv libgtest.a gtest-all.o
mv libgtest.a /usr/local/lib/

# clone repo with updated installation scripts (thanks to ChantMisaya
# for the scripts updates, see https://github.com/ChantMisaya/openabe)
git clone https://github.com/StefanoBerlato/openabe
cd openabe

# build and test the OpenABE library
sudo -E ./deps/install_pkgs.sh
. ./env
make
make test