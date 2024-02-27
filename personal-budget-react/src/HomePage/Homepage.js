import React from 'react';
import MyChart from './MyChart';
import MyChart2 from './MyChart2';


function Homepage() {
    return (
        <main className="center" id="main">
            <div className="page-area">
                <article>
                    <h2>Results</h2>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they to live happier lives... since they expend without guilt or fear... 
                        because they know it is all good and accounted for.
                    </p>
                </article>
    
                <article>
                    <h2>Stay on track</h2>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
                </article>
    
                <article>
                    <h2>Alerts</h2>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </article>
    
                <article>     
                    <h2>Results</h2>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they to live happier lives... since they expend without guilt or fear... 
                        because they know it is all good and accounted for.
                    </p>
                </article>
            
                <article>
                    <h2>Chart</h2>
                    <MyChart />
               
                    <h2>Chart Two</h2>
                    <MyChart2 />
                </article>
            </div>
        </main>
    );
}

export default Homepage;

