import React from 'react'
import '../index.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Figure from '../Components/Figure'
import { Link } from 'react-router-dom'

export default class Ppobo extends React.Component {
  render () {
    return (
      <div className='Ppobo'>
        <Header
          title='PpoBO: '
          text='Collaborative Care for Dementia and Alzheimers Patients'
        />
        <p className='prompt'><Link to='/'><i className='pulsate'>./home?</i></Link></p>
        <p className='prompt'>echo '&lt; PpoBO_blog.txt'</p>

        <p>A few years ago, a friend sent me several rather cryptic messages. Essentially, he had asked myself (and a few other friends in our neighborhood) to look out for his grandmother should she be seen walking around the community. At the time we didn't know, but this was because his grandmother was diagnosed with dementia, and at times would<a href='https://www.alz.org/help-support/caregiving/stages-behaviors/wandering'><em> wander outside of their home</em></a> with little to no idea where she was.
          <br />This group of friends and I built an app at HackED 2020 to help those diagnosed with these conditions, focusing specifically on wandering and the dangers associated with it. We are proud to present PpoBO, which received the first place prize.
        </p>
        <Figure
          source='./Resources/Projects/Ppobo/architecture.jpg'
          title='App Architecture and Tech Stack'
          caption="A view of the app's architecture and tech stack"
        />
        <p>PpoBO works with two types of users, caretakers/"care givers" and "care receivers". Accounts are registered individually, and from there recievers are able to register caretakers; storage of all the app's data and secure authentication is done with Google's Firebase. After login, each type of user has different actions available to them from within the app.
          <br />The UI/UX is entirely <a href='https://github.com/rqin1/PpoBO/tree/master/PpoBO/app/src/main/res'><em>native android</em></a>, so I won't spend much time on it. As our primary goal was to combat wandering, caretaker accounts are able to set up geofences for their care receivers, and receive a text message as well as a log/report in the app alerting them whenever the receiver leaves the geofence.
        </p>
        <Figure
          source='./Resources/Projects/Ppobo/geofencing.jpg'
          title='Caretaker View'
          caption="Caretakers' geofence screen"
        />
        <p>This was once again accomplished with Google, this time using Google Maps API. Geofences are <a href='https://developers.google.com/location-context/geofencing'><em>part of Maps</em></a>, and events can be set up to trigger on entering, leaving, or idling in these geofences. In our case, this was a text message and a basic report stored in the app. Unfortunately, the API currently only supports circular geofences with no easy workaround.
          <br />But of course, our concern isn't if the caretaker leaves the geofence, but the care receiver. Thus, once a geofence is registered by a caretaker, it is immediately uploaded to the Firebase database and linked to the care receiver's app. This is currently not real time and requires an app restart; this is definitely something to fix when we resume development.
        </p>
        <Figure
          source='./Resources/Projects/Ppobo/help.jpg'
          title='Care receiver view'
          caption='A very prominent button for care receivers'
        />
        <p>Asides from registering caretakers, care receivers don't need very much functionality from the app asides from location tracking. Thus, upon opening the app care receivers are greeted by a very large button simply labelled "Help"; this button sends a text message and alert to all caretakers much like exiting the geofence does, albeit with slightly different text.
          <br />Upon pressing the button, care receivers are presented with a screen which lists shortcuts to related emergency numbers/services. The numbers are currently hard coded to <a href='https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/915/184/datas/gallery.jpg'><em>Alberta's relevant services</em></a>, but there are plans to allow these shortcuts to be customized. Some screens are shared by both types of users, such as viewing connected accounts, but these are simply just showing information and not very interesting from a development standpoint.
        </p>
        <Figure
          source='./Resources/Projects/Ppobo/fluff.png'
          title='Slack fluff'
          caption='Hackathon Slack channels are always fun'
        />
        <p>Ultimately, this project was fairly straightforward. The only major challenge we faced (asides from lack of sleep) was working with the Kotlin code we used to implement geofencing, as none of us were familiar with Kotlin. Thankfully, Kotlin to Java translation is possible through Android Studio as they both run on the JVM and thus have the same machine code.
          <br />The code can be found on <a href='https://github.com/rqin1/PpoBO'><em>GitHub here</em></a>. I'd like to thank my teammates: Darian, Richard, and Anmol, for working with me on this project and guiding me through my first major android project. I'd also like to thank HackED for organizing the hackathon; it was a pleasure to compete and present this project to everyone.
        </p>

        <Footer />
      </div>
    )
  }
}
