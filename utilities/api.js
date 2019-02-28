//using the same logic as following along in class for udacifitness app
//need functions to get data

import { AsyncStorage } from 'react-native'
import {CARD_STORAGE_KEY, pullData} from "./_DATA"

export function loadDecks(){
    const storageData = AsyncStorage.getItem(CARD_STORAGE_KEY);
    console.log('sd',storageData);
    console.log(JSON.stringify(pullData()));
    if(storageData === null){
        AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(pullData()));
        return pullData();
    }else{
        return storageData;
    }
}