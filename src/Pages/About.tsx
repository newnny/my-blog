import './Page.css'

const About = () => {
    return (
        <div className="App-page">
            <div className="background">
                <p>My name is <b className="highlight">Yuni</b>.</p>
            </div>
            <div className="background">
                <p>
                    I am working as a &nbsp;
                    <b className="highlight">frontend developer</b>
                    &nbsp;and a&nbsp;
                    <b className="highlight">product designer</b>
                    &nbsp;in a&nbsp;
                    <b className="highlight">health tech start-up</b>
                    &nbsp;based in&nbsp;
                    <b className="highlight">Berlin</b>
                    &nbsp;since 2020&nbsp;
                </p>
            </div>
            <div className="background">
                <p>
                    I studied &nbsp;
                    <b className="highlight">nursing</b>
                    &nbsp;in South Korea and worked as a nurse/HCA for 7years in Busan and London.
                </p>
            </div>
            <div className="background">
                <p>
                    With my background, I am&nbsp;
                    <b className="highlight">planning</b>,&nbsp;
                    <b className="highlight">designing</b> and&nbsp;
                    <b className="highlight">developing</b>
                    &nbsp;an&nbsp;
                    <b className="highlight">EMR(Electronic Medical Record) system</b>
                    &nbsp;and&nbsp;
                    <b className="highlight">CDS(Clinical Decision Support) tools.</b>
                </p>
            </div>
        </div>
    )
}

export default About