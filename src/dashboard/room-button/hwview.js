import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Header from '../header';
import Button from 'react-bootstrap/Button';
import { MDBSwitch } from 'mdb-react-ui-kit';

export default function Hwview() {
    const location = useLocation();
    const hwork = location.state?.data;
    const subname = location.state?.name;
    const subdis = location.state?.dis;
    const [checked, setChecked] = useState(false);

    console.log(hwork, "work");
    console.log(checked);

    const openFile=(file)=>{
        window.open(`http://localhost:3004/files/${file}`);

    }
    return (
        <div className="hwview-body">
            <div>
                <Header />
            </div>
            <div className="hw">
            <label>Homework</label>
            <div className="hwtitle"><label>Title :</label>{subname}</div>
            <div className="hwdis "><label>Discription:</label>{subdis}</div>
            </div>
            <div className="tablefull">
                <div className="row">
                    <div className="user" >
                        <label className="heading">users</label>
                    </div>
                    <div className="work">
                        <label className="heading">Document</label>
                    </div>
                    <div className="view">
                        <label className="heading">To view</label>
                    </div>
                </div>
                {hwork && hwork.map((item, index) => (
                    <div className="table">
                        <div className="row" key={index}>
                            <div className="user">
                                {item.user}
                            </div>
                            <div className="work">
                                {item.work}
                            </div>
                            <div className="view">
                                <Button variant="info" onClick={()=>openFile(item.work)}>View Doc</Button>
                            </div>

                            <MDBSwitch id='flexSwitchCheckDefault' onChange={setChecked=="True"} />
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}