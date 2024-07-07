import plantIcon from "/images/plant-icon-resize.png";

const Header = () => {
	const brand = "Planto.";

	return (
		<header>
			<div className="nav-brand">
				<img src={plantIcon} />
				<h2>{brand}</h2>
			</div>
            <div className="nav-menu-one">
                <h3>Home</h3>
                <h3>Plant Type</h3>
                <h3>More</h3>
                <h3>Contact</h3>
            </div>
            <div className="nav-menu-two">
                <h3>Home</h3>
                <h3>Plant Type</h3>
                <h3>More</h3>
                <h3>Contact</h3>
            </div>
		</header>
	);
};

export default Header;
