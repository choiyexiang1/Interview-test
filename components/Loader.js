const Loader = () => {
    return (
        <div id="component">
            <div id="circle">
                <div id="rocket">
                    <img src="/loading_rocket.png" width="150" height="150" />
                </div>
            </div>

            <style jsx>{`
                #component{
                    position: relative;
                    height: 90vh;
                }

                #circle {
                    position: absolute;
                    top: 40%;
                    left: 45%;
                    margin-right: -50%;
                    transform: translate(-50%, -50%);
                    border: 2px solid black;
                    border-radius: 50%;
                    border-top: 2px solid white;
                    border-left: 2px solid white;
                    border-right: 2px solid white;
                    width: 150px;
                    height: 150px;
                    -webkit-animation: spin 2s linear infinite;
                    animation: spin 2s linear infinite;
                  }
                  
                  @-webkit-keyframes spin {
                    0% { -webkit-transform: rotate(0deg); }
                    100% { -webkit-transform: rotate(360deg); }
                  }
                  
                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
            
            `}</style>
        </div>
    );
}

export default Loader