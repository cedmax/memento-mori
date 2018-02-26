const { NODE_ENV: env } = process.env
const OneSignal = window.OneSignal || []

let appId = '671aaac6-fac0-4955-b34d-b9c4cf0794ac'
if (env === 'development') {
  appId = 'dbcf1a95-1805-4455-8a0e-54dfa8a9d854'
  OneSignal.log.setLevel('trace')
}

export const initNotifications = () => OneSignal.push(() => {
  OneSignal.init({
    appId,
    autoRegister: false,
    notifyButton: {
      enable: true,
      size: 'small',
      theme: 'inverse',
      prenotify: false,
      showCredit: false,
      text: {
        'tip.state.unsubscribed': 'Get a daily reminder of your ephemeral condition',
        'tip.state.subscribed': 'Are you happy with the reminders?',
        'tip.state.blocked': 'Why would you block us?',
        'message.action.subscribed': 'See you later?',
        'message.action.resubscribed': 'See you later?',
        'message.action.unsubscribed': "It's sad to see you abandon us",
        'dialog.main.title': 'Memento Mori?',
        'dialog.main.button.subscribe': 'EMBRACE IT',
        'dialog.main.button.unsubscribe': 'WTF? NO!',
        'dialog.blocked.title': 'Unblock the reminders',
        'dialog.blocked.message': 'Follow these instructions to get back:'
      },
      colors: {
        'circle.background': 'white',
        'circle.foreground': 'black',
        'badge.background': 'white',
        'badge.foreground': 'black',
        'badge.bordercolor': 'black',
        'pulse.color': 'black',
        'dialog.button.background.hovering': 'darkred',
        'dialog.button.background.active': 'darkred',
        'dialog.button.background': 'black',
        'dialog.button.foreground': 'white'
      }
    },
    welcomeNotification: {
      disable: true
    }
  })
})

export const isPushSupported = (callback) => OneSignal.push(function() {
  callback(OneSignal.isPushNotificationsSupported())
});