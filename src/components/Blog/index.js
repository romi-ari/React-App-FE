//import ReactLogo from '../../logo.svg'
import '../../App.css'

function Blog() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={ require('../../logo.svg').default } className='App-logo' alt='Logo' />
                <p>
                    Halaman Blog
                </p>
            </header>
        </div>
    )
}

export default Blog