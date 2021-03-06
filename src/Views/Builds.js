import React from 'react'
import '../index.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Figure from '../Components/Figure'
import { Link } from 'react-router-dom'

export default class Builds extends React.Component {
  render () {
    return (
      <div className='Builds'>
        <Header
          title='my_builds: '
          text='The Hardware'
        />
        <p className='prompt'><Link to='/'><i className='pulsate'>./home?</i></Link></p>
        <p className='prompt'>echo '&lt; my_builds_blog.txt'</p>

        <p><em>Daily Driver Desktop </em><a href='https://ca.pcpartpicker.com/list/fLmXTC'>(PCPartPicker List)</a></p>
        <Figure
          source='./Resources/Projects/Builds/desktop.png'
          title='Main Desktop'
          caption='RAM was fixed to be dual-channel later.'
        />
        <p>CPU - Ryzen 7 3700x<br />AMD over Intel was a fairly obvious choice, given their current advantage over Intel in both price to performance and multi-threaded applications. I chose a Ryzen 7 over a Ryzen 5 as I find myself running multi-threaded workloads often enough to justify the upgrade, but not often enough to pay the extra for something like the Ryzen 9 3900x (which offers <a href='https://www.hardwaretimes.com/amd-ryzen-7-3700x-vs-ryzen-9-3900x-gaming-performance-across-10-titles-lows-clock-scaling-and-cpu-gpu-power-draw/'><em>no benefit in single threaded applications</em></a>). As for the 3800xt, the performance gains are marginal, especially when factoring in the roughly 25% increase in price.</p>
        <p>Motherboard - MSI B450 Gaming Plus MAX<br />While B550 was available when I built this PC, I didn't see myself needing PCI Express Gen 4 for any practical reason anytime soon (little did I know the upcoming RTX 3000 video cards would make use of it). Additionally, with AMD's announcement that B450 boards would support 4th gen Ryzen, the newer chipset just seemed like a waste of money given the higher prices. I avoided X570 for a similar reason. As for why this specific MSI board, they're well respected in the price point (Gaming Plus Max and A-Pro Max), but I hated the color of the A-Pro. A Tomahawk would've been nice, but at the time was as expensive as an X570 board.</p>
        <p>RAM - Corsair Vengeance LPX (2X8)GB DDR4-3200 CL16<br />I actually originally wanted to go for a kit of G.SKILL Ripjaws V, as the color scheme better fit my build. The kit I wanted ended up not being on my motherboard's QVL, and despite Ryzen's general compatibility with high frequency RAM, I didn't want to take the risk. Corsair's kits ended up being the best value available at the time. As for the clock speeds, 3200CL16 and 3600CL18 have <a href='https://forums.tomshardware.com/threads/3200-cl16-vs-3600-cl18-%E2%80%94-the-better-choice.3535789/'><em>practically identical latencies</em></a>, so the much cheaper 3200Mhz kit was far more appealing than a higher frequency kit which would offer <i>maybe</i> 1% actual performance gains.</p>
        <p>Everything Else<br />I built this PC for both gaming and machine learning, so my GPU choice was whatever was best within my budget - this ended up being the Nvidia 2080 SUPER. While I wanted a Gigabyte Windforce for the quieter three fan heatsink, it wasn't in stock at the time and the EVGA Black was the next cheapest option with favorable reviews. Everything else is fairly standard, asides from the Asus PCE-AC56 wireless card which I added due to lack of CAT6 wiring in my apartment.</p>
        <p><em>School/Travel Laptop</em></p>
        <Figure
          source='./Resources/Projects/Builds/laptop.png'
          title='Spectre Laptop'
          caption='Featuring two Thunderbolt 3 ports!'
        />
        <p>Obviously I can't bring my desktop to school every day, so I have a laptop - the HP Spectre X360. I wanted a smaller (13") two in one, and ended up narrowing my choices between this, the Dell XPS13, and Microsoft Surface Laptop. Macs are dead to me until they fix their cooling. I hate the Alcantara Microsoft uses, but to be perfectly honest I chose the Spectre over the XPS13 simply because of its color scheme - oops.
          <br />As for the model choice, I believe 4k displays on laptops to be overkill, especially when I already have a desktop and battery life is a big concern. For a similar reason, I opted for an i5-8250U and 8GB of RAM instead of the i7+16GB configurations, as heavier workloads could be done on my desktop.
          <br />It is currently dual booting Windows 10 and Ubuntu 20.04, although I am considering Kali.
        </p>
        <p><em>Server </em><a href='https://ca.pcpartpicker.com/list/vnfKrV'>(Approximate List)</a></p>
        <Figure
          source='./Resources/Projects/Builds/server.png'
          title='Frankenstein Server'
          caption='A true mishmash of scavenged parts.'
        />
        <p>A test bench I use to deploy random things I wouldn't want on the computers shown above. It's built from scavenged/used parts, including an AMD APU released around a decade ago; dirt cheap, but functional. At the time of writing it's running Windows 10 for a Minecraft server (don't ask), as well as a VirtualBox Ubuntu VM for a Pihole DNS Sinkhole.
          <br />Yes, that is a DDR3 SODIMM to DIMM converter. Yes, it works. No, I don't know how. <a href='https://www.amazon.ca/gp/product/B07GVGGGC7'><em>Here</em></a> is the link.
        </p>

        <Footer />
      </div>
    )
  }
}
