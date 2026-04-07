import {DogConfig} from '../config/Dog';
import Script from 'next/script';
import React from 'react';

export default function OnekoDog() {
  if (!DogConfig.enabled) {
    return null;
  }

  return <Script src="./sprites/oneko-dog.js" data-dog="./sprites/oneko-dog.gif" />;
}