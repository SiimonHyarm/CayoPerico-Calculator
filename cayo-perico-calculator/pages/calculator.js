import Link from "next/link"
import styles from '../styles/Calculator.module.css'
import React, { useState } from "react";

export default function Calculator() {

    //South-West storage
    const [valuesw1, setValuesw1] = useState("Empty")
    const [sumsw1, setSumsw1] = useState(0)
    const [percentsw1, setPercentsw1] = useState(0.0)

    const [valuesw2, setValuesw2] = useState("Empty")
    const [sumsw2, setSumsw2] = useState(0)
    const [percentsw2, setPercentsw2] = useState(0.0)
    //


    function whatAreThose(x,y, s) {
        switch(s) {
            case "valuesw1":
                setSumsw1(x)
                setPercentsw1(y)
                break;
            case "valuesw2":
                setPercentsw2(y)
                setSumsw2(x)
                break;
        }
    }

    function otherValues(s, y) {
        var summa = 0
        var percent = 0.0
        switch(s) {
            case "Cash":
                summa = 90000
                percent = 25
                //setSumsw1(90000)
                //setPercentsw1(25)
                break;
            case "Painting":
                summa = 189500
                percent = 50
                //setSumsw1(189500)
                //setPercentsw1(50)
                break;
            case "Gold":
                summa = 332187
                percent = 66.67
                //setSumsw1(332187)
               // setPercentsw1(66.67)
                break;
            default:
                summa = 0
                percent = 0
               // setSumsw1(0)
                //setPercentsw1(0)
        }
        //return [summa, percent]
        whatAreThose(summa, percent, y)
    }

    function logValue() {
        console.log("valuesw1", valuesw1);
        console.log("valuesw2",valuesw2);
        console.log("sumsw1", sumsw1)
        console.log("percentsw1", percentsw1)
        console.log("sumsw2", sumsw2)
        console.log("percentsw2", percentsw2)
    }
    return (
        <>
        <main className={styles.main}>
            <h1 className={styles.title}>The Cayo Perico Heist Calculator</h1>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h2>
                        South Warehouse camera 1
                    </h2>
                    <p className={styles.description}>
                        Choose what is on the table
                    </p>
                    <div className="sw1">
                        <select

                            valuesw1={valuesw1}

                            onChange={(e) => {
                                setValuesw1(e.target.value);
                            }}
                        >
                            <option value="Empty">Empty</option>
                            <option value="Cash">Cash</option>
                            <option value="Painting">Painting</option>
                            <option value="Gold">Gold</option>
                        </select>
                    </div>

                    <div className="sw2">
                        <select
                            valuesw2={valuesw2}

                            onChange={(e) => {
                                setValuesw2(e.target.value);
                            }}
                        >
                            <option value="Empty">Empty</option>
                            <option value="Cash">Cash</option>
                            <option value="Painting">Painting</option>
                            <option value="Gold">Gold</option>
                        </select>   
                    </div>
                    <button onClick={()=> {otherValues(valuesw1, "valuesw1"); otherValues(valuesw2, "valuesw2")}}>Log ans</button>
                    <p>The cost of this room is: sumsw1+sumsw2</p>
                </div>
            </div>
            <h2>
                <Link href="/">
                    <a>&larr;Back to main page</a>
                </Link>
            </h2>
            </main>
        </>
    )
}