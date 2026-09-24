/* ===========================================
   LOAD SKILLS
=========================================== */

document.addEventListener("DOMContentLoaded", loadCharts);

async function loadCharts(){

    try{

        const response = await fetch("data/skills.json");

        const data = await response.json();

        createChart(
            "analyticsChart",
            data.analytics,
            "Data Analytics Skills"
        );

        createChart(
            "mlChart",
            data.ml_ai,
            "Machine Learning & AI"
        );

        createChart(
            "dsChart",
            data.data_science,
            "Data Science Skills"
        );

    }

    catch(error){

        console.error(error);

    }

}



/* ===========================================
   CREATE CHART
=========================================== */

function createChart(canvasId, skills, title){

    const labels = skills.map(item => item.skill);

    const values = skills.map(item => item.level);

    new Chart(

        document.getElementById(canvasId),

        {

            type:"bar",

            data:{

                labels:labels,

                datasets:[{

                    label:title,

                    data:values,

                    borderWidth:0,

                    borderRadius:8,

                    backgroundColor:"#46c6c8"

                }]

            },

            options:{

                indexAxis:"y",

                responsive:true,

                maintainAspectRatio:false,

                plugins:{

                    legend:{
                        display:false
                    }

                },

                scales:{

                    x:{

                        min:0,

                        max:10,

                        ticks:{
                            color:"#E5E7EB",
                            stepSize:1
                        },

                        grid:{
                            color:"rgba(255,255,255,.08)"
                        }

                    },

                    y:{

                        ticks:{
                            color:"#F8FAFC"
                        },

                        grid:{
                            display:false
                        }

                    }

                }

            }

        }

    );

}