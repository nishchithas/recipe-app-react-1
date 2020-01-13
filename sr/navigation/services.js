import React,{useEffect, useState} from 'react';
import NutritionResults from '../nutritionResults'
import '../App.css';

const NutritionAnalysis = () => {
    const Nutrition_app_key = "cd8b3851268befcc06b280ac3008abb0";
    const Nutrition_app_id= "eb911bf0";
    const [toAnalyse,setToAnalyse] = useState("");
    const [analysedData,setAnalysedData] = useState("");

    const updateDataToAnalyse = event =>{
        setToAnalyse(event.target.value);
    }

    useEffect(() => {
    }, [analysedData]);

    const analyseData = async event =>{
        if(toAnalyse){
            let response = await fetch(`https://api.edamam.com/api/nutrition-details?app_id=${Nutrition_app_id}&app_key=${Nutrition_app_key}`, {
                method: 'POST',
                headers: new Headers({
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }),
                body: JSON.stringify({"ingr":toAnalyse.split(/\n|\r/)})
            });
            const analysedData = await response.json();
            setAnalysedData(analysedData);
            //console.log(analysedData);
        }
    }
    return (
        <div className="wrapperdiv">
            <div className="ingredient-box">
                <h1 style={{color:'orange'}}>Nutrition Analysis</h1>
                <div className="text-box">
                    <p>Enter an ingredient list list for what you are cooking, like 
                        <span className="example">"1 cup rice, 10 oz chickpeas"</span>, etc.<p style={{fontSize:'small'}}>Enter each ingredient on a new line.</p> 
                    </p>
                    <p><textarea name="" id="demoAnalysis" cols="60" rows="15" value={toAnalyse} onChange={updateDataToAnalyse} className="form-control" spellCheck="true">1 cup rice,10 oz chickpeas</textarea></p>
                    <p><button onClick={analyseData} type="button" className="calc-analysis-api" onClick={analyseData}>Analyze</button></p>
                </div>
                <div className="result-box">
                    <NutritionResults results = {analysedData}/>
                </div>
            </div>
        </div>
    );
}
export default NutritionAnalysis
