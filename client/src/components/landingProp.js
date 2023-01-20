export default function LandingProp() {
    return (
        <div>
            <img className="bg" src="images/Gradient-Background.png" alt="" />
            <div className="bg">
                <div className="landing-text">
                    <h1>Welcome to GEO</h1>
                </div>
            </div>
            <div className="landing-navbar">
                <a href="/">
                    <h1>GEO</h1>
                </a>
            </div>
            <div className="landing">
                <h1>Welcome to GEO</h1>
                <h2>
                    See what's happening. Be a part of it. All across the world.
                </h2>
                <a href="/login">
                    <button type="submit" className="btn btn-primary">
                        Sign In
                    </button>
                </a>
                <a href="/register">
                    <button type="submit" className="btn btn-primary">
                        Join Now
                    </button>
                </a>
            </div>
        </div>
    );
}
