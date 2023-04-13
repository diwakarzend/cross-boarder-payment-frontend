import React, { useState, useEffect } from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { Button } from "../../Components/UI/StyledConstants";
import { getBankEntitiesRequest } from "../../utils/api";
import AddBankEntityModal from "./AddBankEntityModal";
import EntityList from "./EntityList";

const BankEntity = () => {
  const [listData, setListData] = useState([]);
  const [modal, setModal] = useState({status: false, modalData: null});
  useEffect(() => {
    getBankEntitiesRequest({ pageNo: 0, pageSize: 100, userUUID: '1ba336de-16e6-11ec-9621-0242ac130002' }).then((res) => {
      setListData(res?.data?.data);
    });
  }, [modal.status]);

  const onUpdateClick = (entityDetails) => {
    setModal({status: true, modalData: entityDetails});
  }

  return (
    <>
      <BreadCrumb heading="Merchant List" value="Merchant List" />
      <div className="card-wrapper flex-column mb-4">
        <div className="card-header flex item-center space-between">
          <h4 className="card-title">Bank Entity</h4>
        </div>
        <div className="card-body">
            <div className="flex p16">
                <Button className="btn-success" onClick={() => setModal({...modal, status: true})}>Add Bank Entity</Button>
            </div>
            <EntityList listData={listData} onUpdateClick={onUpdateClick}/>
        </div>
        
      </div>
      { modal.status && <AddBankEntityModal setModal={setModal} modalData={modal.modalData} />}
    </>
  );
};

export default BankEntity;
