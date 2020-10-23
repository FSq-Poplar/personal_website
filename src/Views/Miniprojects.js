import React from 'react'
import '../index.css'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Figure from '../Components/Figure'
import { Link } from 'react-router-dom'

export default class MiniProjects extends React.Component {
  render () {
    return (
      <div className='Builds'>
        <Header
          title='mini_stuff: '
          text='Quick Projects from a Bored CS Student'
        />
        <p className='prompt'><Link to='/'><i className='pulsate'>./home?</i></Link></p>
        <p className='prompt'>echo '&lt; mini_stuff_blog.txt'</p>

        <p><em>Storage Visualizer </em><a href='https://github.com/FSq-Poplar/storage_visualizer'>(GitHub Repo)</a></p>
        <p>This was actually made from a school assignment in which we made a storage visualizer to practice working with trees. I needed to find ogg music files in a game folder, and ended up adding the file type colorization to the assignment to find their directory; later I rebuilt it from scratch and this tool took shape.</p>
        <Figure
          source='./Resources/Projects/MiniProjects/fs_visualizer.png'
          title='File System Visualizer'
          caption='A screenshot of the program'
        />
        <p>It creates a tree-like data structure containing all the relevant information to render, such as color, location, size etc - the "FileSystemTree" class. While definitely not the most efficient way to do it, as previously mentioned a large part of this assignment was to practice working with the data structure. To that end, I kept that design choice from the original assignment.</p>
        <p><em>Binder Sleeper Laptop</em></p>
        <p>An old netbook of mine had its case crack, to the point where it wasn't really portable anymore unless I wanted to break the thing in half. Fortunately, it was still functional as a computer and I ended up taking the thing out of its chassis.</p>
        <Figure
          source='./Resources/Projects/MiniProjects/deconstructed_laptop.jpg'
          title='Sleeper under construction'
          caption='The deconstructed netbook'
        />
        <p>I remembered seeing pentesting kits built into makeup kits, and had the idea to build the laptop into a binder I had lying around. After buying a bluetooth keyboard/trackpad, it only took a few hours to put together this sleeper laptop.</p>
        <Figure
          source='./Resources/Projects/MiniProjects/finished_sleeper.jpg'
          title='Completed Sleeper'
          caption='Finished'
        />

        <Footer />
      </div>
    )
  }
}
