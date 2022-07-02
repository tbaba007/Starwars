import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { GetAll } from "../../services/starwars.service";
import { Table } from "react-bootstrap";
import starShipStyles from "./StarShipList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { addStarWars } from "../../store/slice/starwars/slice";

export type Results = {
  name: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  height: string;
  hair_color: string;
  gender: string;
  films: string[];
  eye_color: string;
  edited: string;
  created: string;
  birth_year: string;
};

export interface IResult {
  count: number;
  next: string;
  previous: any;
  results: [Results];
}
const StarwarsList = () => {
  debugger;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const {results,count,next,previous} = useSelector(
    (state: RootState) => state.starwars
  );
  const dispatch = useDispatch();
  const history = useHistory();
  useMemo(() => {
    document.title = "StarShip";
    if (results.length <2) {
      const GetStarShipList = async () => {
        return await GetAll().then((response: IResult) => {
          // setIsLoading(false);
          // setStarShipList(response);
          dispatch(addStarWars(response));
        });
      };
      GetStarShipList();
    }
  }, [dispatch,results]);

  const getRandomNumber = () => Math.random();

  const onNameClick = (item: any) => {
    history.push("/Details", item);
  };

  const onNext = () => {
    
  }

  if (isLoading) {
    <p>loading....</p>;
  }
  return (
    <>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {results?.map((item: any, index: number) => {
            return (
              <tr key={index + getRandomNumber()}>
                <td>{index + 1}</td>
                <td>
                  <label
                    className='link-primary'
                    onClick={() => onNameClick(item)}>
                    {item.name}
                  </label>
                </td>
                <td>{item.birth_year}</td>
                <td>{item.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <p className={starShipStyles.pageNumber}>
        Page {pageNumber} of {count}
      </p>
      <section className={`row justify-content-center ${starShipStyles.pagination}`}>
        <button>Prev</button> |
        <button>Next</button>
      </section>
    </>
  );
};

export default StarwarsList;
