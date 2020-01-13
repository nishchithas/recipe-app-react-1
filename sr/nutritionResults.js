import React,{useEffect, useState} from 'react';
import './App.css';
import './nutrition.css'

const NutritionResult = (results) =>{
    let totalCal = 0
    let FAT = '-';
    let totalDailyFAT = '-';
    let FASAT = '-';
    let totalDailyFASAT = '-';
    let FATRN = '-';
    let CHOLE = '-';
    let totalDailyCHOLE = '-';
    let NA = '-';
    let totalDailyNA = '-';
    let CHOCDF = '-';
    let totalDailyCHOCDF = '-';
    let FIBTG = '-';
    let totalDailyFIBTG = '-';
    let SUGAR = '-';
    let SUGARadded = '-';
    let PROCNT = '-';
    let totalDailyPROCNT = '-';
    let VITD = '-';
    let totalDailyVITD = '-';
    let CA = '-';
    let totalDailyCA = '-';
    let FE = '-';
    let totalDailyFE = '-';
    let K = '-';
    let totalDailyK = '-';

    if(results.results){
        const analysedResults =  results.results;
        if (typeof(analysedResults.totalNutrients.ENERC_KCAL) != "undefined") {
            totalCal = Math.round(analysedResults.totalNutrients.ENERC_KCAL.quantity);
        }
        if (typeof(analysedResults.totalNutrients.FAT) != "undefined") {
            FAT = Math.round(analysedResults.totalNutrients.FAT.quantity*10)/10+' '+analysedResults.totalNutrients.FAT.unit;
        } 
        if (typeof(analysedResults.totalDaily.FAT) != "undefined") {
            totalDailyFAT = Math.round(analysedResults.totalDaily.FAT.quantity)+' '+analysedResults.totalDaily.FAT.unit;
        }	
        if (typeof(analysedResults.totalNutrients.FASAT) != "undefined") {
            FASAT = Math.round(analysedResults.totalNutrients.FASAT.quantity*10)/10+' '+analysedResults.totalNutrients.FASAT.unit;
        }
        if (typeof(analysedResults.totalDaily.FASAT) != "undefined") {
            totalDailyFASAT = Math.round(analysedResults.totalDaily.FASAT.quantity)+' '+analysedResults.totalDaily.FASAT.unit;
        }	
        if (typeof(analysedResults.totalNutrients.FATRN) != "undefined") {
            FATRN = Math.round(analysedResults.totalNutrients.FATRN.quantity*10)/10+' '+analysedResults.totalNutrients.FATRN.unit;
        }	
        if (typeof(analysedResults.totalNutrients.CHOLE) != "undefined") {
            CHOLE = Math.round(analysedResults.totalNutrients.CHOLE.quantity*10)/10+' '+analysedResults.totalNutrients.CHOLE.unit;
        }
        if (typeof(analysedResults.totalDaily.CHOLE) != "undefined") {
            totalDailyCHOLE = Math.round(analysedResults.totalDaily.CHOLE.quantity)+' '+analysedResults.totalDaily.CHOLE.unit;
        }
        if (typeof(analysedResults.totalNutrients.NA) != "undefined") {
            NA = Math.round(analysedResults.totalNutrients.NA.quantity*10)/10+' '+analysedResults.totalNutrients.NA.unit;
        }
        if (typeof(analysedResults.totalDaily.NA) != "undefined") {
            totalDailyNA = Math.round(analysedResults.totalDaily.NA.quantity)+' '+analysedResults.totalDaily.NA.unit;
        }	
        if (typeof(analysedResults.totalNutrients.CHOCDF) != "undefined") {
            CHOCDF = Math.round(analysedResults.totalNutrients.CHOCDF.quantity*10)/10+' '+analysedResults.totalNutrients.CHOCDF.unit;
        }
        if (typeof(analysedResults.totalDaily.CHOCDF) != "undefined") {
            totalDailyCHOCDF = Math.round(analysedResults.totalDaily.CHOCDF.quantity)+' '+analysedResults.totalDaily.CHOCDF.unit;
        }
        if (typeof(analysedResults.totalNutrients.FIBTG) != "undefined") {
            FIBTG = Math.round(analysedResults.totalNutrients.FIBTG.quantity*10)/10+' '+analysedResults.totalNutrients.FIBTG.unit;
        }
        if (typeof(analysedResults.totalDaily.FIBTG) != "undefined") {
            totalDailyFIBTG = Math.round(analysedResults.totalDaily.FIBTG.quantity)+' '+analysedResults.totalDaily.FIBTG.unit;
        }
        if (typeof(analysedResults.totalNutrients.SUGAR) != "undefined") {
            SUGAR = Math.round(analysedResults.totalNutrients.SUGAR.quantity*10)/10+' '+analysedResults.totalNutrients.SUGAR.unit;
        }
        if (typeof(analysedResults.totalNutrients.SUGARadded) != "undefined") {
            SUGARadded = Math.round(analysedResults.totalNutrients.SUGARadded.quantity*10)/10+' '+analysedResults.totalNutrients.SUGARadded.unit;
        }

        if (typeof(analysedResults.totalNutrients.PROCNT) != "undefined") {
            PROCNT = Math.round(analysedResults.totalNutrients.PROCNT.quantity*10)/10+' '+analysedResults.totalNutrients.PROCNT.unit;
        }
        if (typeof(analysedResults.totalDaily.PROCNT) != "undefined") {
            totalDailyPROCNT = Math.round(analysedResults.totalDaily.PROCNT.quantity)+' '+analysedResults.totalDaily.PROCNT.unit;
        }	

        if (typeof(analysedResults.totalNutrients.VITD) != "undefined") {
            VITD = Math.round(analysedResults.totalNutrients.VITD.quantity*10)/10+' '+analysedResults.totalNutrients.VITD.unit;
        }
        if (typeof(analysedResults.totalDaily.VITD) != "undefined") {
            totalDailyVITD = Math.round(analysedResults.totalDaily.VITD.quantity)+' '+analysedResults.totalDaily.VITD.unit;
        }

        if (typeof(analysedResults.totalNutrients.CA) != "undefined") {
            CA = Math.round(analysedResults.totalNutrients.CA.quantity*10)/10+' '+analysedResults.totalNutrients.CA.unit;
        }
        if (typeof(analysedResults.totalDaily.CA) != "undefined") {
            totalDailyCA = Math.round(analysedResults.totalDaily.CA.quantity)+' '+analysedResults.totalDaily.CA.unit;
        }	

        if (typeof(analysedResults.totalNutrients.FE) != "undefined") {
            FE = Math.round(analysedResults.totalNutrients.FE.quantity*10)/10+' '+analysedResults.totalNutrients.FE.unit;
        }
        if (typeof(analysedResults.totalDaily.FE) != "undefined") {
            totalDailyFE = Math.round(analysedResults.totalDaily.FE.quantity)+' '+analysedResults.totalDaily.FE.unit;
        }	
        
        if (typeof(analysedResults.totalNutrients.K) != "undefined") {
            K = Math.round(analysedResults.totalNutrients.K.quantity*10)/10+' '+analysedResults.totalNutrients.K.unit;
        }
        if (typeof(analysedResults.totalDaily.K) != "undefined") {
            totalDailyK = Math.round(analysedResults.totalDaily.K.quantity)+' '+analysedResults.totalDaily.K.unit;
        }
        return (
            <div>
                <h2>Nutrition Results</h2>
                    <table className="performance-facts__table">
                        <thead>
                            <tr>
                                <th colSpan="3" className="amps">Amount Per Serving</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colSpan="2" id="lkcal-val-cal"><b>Calories</b></th>
                                <td className="nob">{totalCal}</td>
                            </tr>
                            <tr className="thick-row">
                                <td colSpan="3" className="small-info"><b>% Daily Value*</b></td>
                            </tr>
                            <tr>
                                <th colSpan="2"><b>Total Fat</b>{FAT}</th>
                                <td><b>{totalDailyFAT}</b></td>
                            </tr>
                            <tr>
                                <td className="blank-cell"></td>
                                <th>Saturated Fat {FASAT}</th>
                                <td><b>{totalDailyFASAT}</b></td>
                            </tr>
                            <tr>
                                <td className="blank-cell"></td>
                                <th>Trans Fat {FATRN}</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th colSpan="2"><b>Cholesterol</b> {CHOLE}</th>
                                <td><b>{totalDailyCHOLE}</b></td>
                            </tr>
                            <tr>
                                <th colSpan="2"><b>Sodium</b> {NA}</th>
                                <td><b>{totalDailyNA}</b></td>
                            </tr>
                            <tr>
                                <th colSpan="2"><b>Total Carbohydrate</b> {CHOCDF}</th>
                                <td><b>{totalDailyCHOCDF}</b></td>
                            </tr>
                            <tr>
                                <td className="blank-cell"></td>
                                <th>Dietary Fiber {FIBTG}</th>
                                <td><b>{totalDailyFIBTG}</b></td>
                            </tr>
                            <tr>
                                <td className="blank-cell"></td>
                                <th>Total Sugars {SUGAR}</th>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="blank-cell"></td>
                                <th>Includes {SUGARadded} Added Sugars</th>
                                <td></td>
                            </tr>
                            <tr className="thick-end">
                                <th colSpan="2"><b>Protein</b> {PROCNT}</th>
                                <td><b>{totalDailyPROCNT}</b></td>
                            </tr>
                        </tbody>
                        </table>
                        <table className="performance-facts__table--grid">
                            <tbody>
                                <tr>
                                    <th>Vitamin D {VITD}</th>
                                    <td><b>{totalDailyVITD}</b></td>
                                </tr>
                                <tr>
                                    <th>Calcium {CA}</th>
                                    <td><b>{totalDailyCA}</b></td>
                                </tr>
                                <tr>
                                    <th>Iron {FE}</th>
                                    <td><b>{totalDailyFE}</b></td>
                                </tr>
                                <tr className="thin-end">
                                    <th>Potassium {K}</th>
                                    <td><b>{totalDailyK}</b></td>
                                </tr>
                            </tbody>
                    </table>
            </div>
        );
    }
    return "";




}
export default NutritionResult
