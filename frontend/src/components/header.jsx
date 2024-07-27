import plantIcon from "/images/plant-icon-resize.png";
import search from "/images/icons/search-interface-symbol.png"
import bag from "/images/icons/bag.png"
import menuButton from "/images/icons/menu-button.png"

const Header = () => {
	const brand = "Planto.";
    
    const headerHandler = () => {
        let x = document.querySelector('.nav-menu-one')
        if(x.style.display === 'block') {
          x.style.display = 'none'
        } else {
          x.style.display = 'block'
        }
      }


	return (
        <>
		<header>
			<div className="nav-brand">
				<img src={plantIcon} />
				<p>{brand}</p>
			</div>
            <div className="nav-menu-two">
                <a href="#"><img src={search}/></a>
                <a className="nav-menu-two-shift-left" href="#"><img src={bag}/></a>
                <a id="menu-button" className="nav-menu-two-shift-left" href="#" onClick={headerHandler}><img src={menuButton}/></a>
            </div>
            
		</header>
        <div className="nav-menu-one">
                <p>Home</p>
                <p>Plant Type</p>
                <p>More</p>
                <p>Contact</p>
            </div>
        </>
	);
};

export default Header;
