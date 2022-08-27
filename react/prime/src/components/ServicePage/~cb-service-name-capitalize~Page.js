import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import ~cb-service-name-capitalize~Datatable from "./~cb-service-name-capitalize~DataTable";
import _ from "lodash";

const ~cb-service-name-capitalize~Page = (props) => {
    const history = useHistory();
    const [data, setData] = useState([]);
    useEffect(() => {
        //on mount
        //axios api call
        // setlist(res.data)
    }, []);

    const onColumnChangeHandler = (index, subKey, newVal) => {
        let _newData = _.cloneDeep(data);
        _newData[index][subKey] = newVal;
        setData(_newData);
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <h5 className="mb-0 ml-2">~cb-service-name-capitalize~</h5>
            </div>
            <div className="grid col-10">
                <div className="col-12 lg:col-6 xl:col-4">
                    <~cb-service-name-capitalize~Datatable items={data} onColumnChange={onColumnChangeHandler} /*onRowDelete*/ />
                </div>
            </div>
            {/* save button */}
        </div>
    );
};
const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(~cb-service-name-capitalize~Page);
