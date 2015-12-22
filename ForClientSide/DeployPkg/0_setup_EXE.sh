#!/bin/bash

echo "{#################################################################"
echo ">>> START 0_setup_EXE.sh"
echo ""


echo "------------------------------------------------------------------"
echo ">>> Build sym links"
echo ""

echo ">>> RUNNING: 'ln -s  ./AssetsFolder/Documents/LiuMeiTALK_PrivacyPolicy.pdf PrivacyPolicy.pdf'"
echo ""
ln -s  ./Assets/Documents/LiuMeiTALK_PrivacyPolicy.pdf PrivacyPolicy.pdf

echo ">>> RUNNING: './AssetsFolder/Documents/LiuMeiTALK_TermsofUse.pdf TermsOfService.pdf'"
echo ""
ln -s  ./Assets/Documents/LiuMeiTALK_TermsofUse.pdf TermsOfService.pdf


echo ""
echo ">>> END 0_setup_EXE.sh"
echo "}#################################################################"
