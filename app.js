
    const parent = React.createElement("div",
        {id:"parent"},
        [React.createElement("div",
            {id:"child"},
            [React.createElement("h1",
                {},"anjana"),
                React.createElement("h2",
                    {},"anjana")]),

                    React.createElement("div",
                        {id:"child"},
                        [React.createElement("h1",
                            {},"anjana"),
                            React.createElement("h2",
                                {},"anjana")]
                            )
                        ,React.createElement("div",
                            {id:"child"},
                            [React.createElement("h1",
                                {},"anjana"),
                                React.createElement("h2",
                                    {},"anjana")])]);


            console.log(parent);
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);
