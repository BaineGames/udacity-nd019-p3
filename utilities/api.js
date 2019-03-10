//using the same logic as following along in class for udacifitness app

import { AsyncStorage } from 'react-native'
import { Permissions, Notifications } from "expo"

const CARD_STORAGE_KEY = "DeckQuizApp:data"
const NOTIFY_KEY = "DeckQuizApp:notify"

export function loadDecks(){
    AsyncStorage.getItem(CARD_STORAGE_KEY).then( data => {
        return JSON.parse(data);
    })
    
}

//use the same notification code we learned through doing the udacifitness example
export function setNotification(){
    AsyncStorage.getItem(NOTIFY_KEY).then(JSON.parse).then((data) => {
      if(data=== null){
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({status}) => {
          if(status === 'granted'){
            Notifications.cancelAllScheduledNotificationsAsync()
            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(8)
            tomorrow.setMinutes(0)

            Notifications.scheduleLocalNotificationAsync(
                {
                    title: "Quiz Today?",
                    body: "Dont forget to try a quiz!!",
                    ios: {
                      sound: true,
                    }
                  },
              {
                time: tomorrow,
                repeat: 'day'
              }
            )
            AsyncStorage.setItem(NOTIFY_KEY, JSON.stringify(true))
          }
        })
      }
    })
}