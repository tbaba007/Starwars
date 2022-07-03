import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { GetAll } from "../../services/starwars.service";
import { Table } from "react-bootstrap";
import starShipStyles from "./StarShipList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  addStarWars,
  getPaginatedItems,
} from "../../store/slice/starwars/slice";
import { addPageNumber } from "../../store/slice/page/slice";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  debugger;
  const { results, count, next, previous } = useSelector(
    (state: RootState) => state.starwars
  );
  const pageNumberList = useSelector(
    (state: RootState) => state.pageNumbers.pageNumber
  );
  const dispatch = useDispatch();
  const history = useHistory();
  useMemo(() => {
    document.title = "StarShip";
    if (!pageNumberList.includes(pageNumber)) {
      setIsLoading(true);
      dispatch(addPageNumber(pageNumber));
      const GetStarShipList = async () => {
        return await GetAll(pageNumber).then((response: IResult) => {
          setIsLoading(false);
          dispatch(addStarWars(response));
        });
      };
      GetStarShipList();
    }
    

  }, [dispatch, pageNumber, pageNumberList]);

  const getRandomNumber = () => Math.random();

  const onNameClick = (item: any) => {
    history.push("/Details", item);
  };

  const onNext = () => {
    setPageNumber(pageNumber + 1);
  };

  const onPrevious = () => {
    if (pageNumber !== 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handlePagedData = (): number => {
    if (pageNumber === 1) {
      return 0;
    } else {
      return -10;
    }
    return 0;
  };
 
  return (
    <>
      {isLoading && <p>Fetching Data... Please Wait</p>}
      {!isLoading && (
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
            {results?.slice(-10).map((item: any, index: number) => {
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
      )}
      {!isLoading && (
        <p className={starShipStyles.pageNumber}>
          Page {pageNumber} of {Math.floor(count / 10)}
        </p>
      )}
      {!isLoading && (
        <section
          className={`row justify-content-center ${starShipStyles.pagination}`}>
          <button onClick={onPrevious} disabled={pageNumber === 1}>
            Prev
          </button>{" "}
          |
          <button
            className='btn btn-primary'
            disabled={pageNumber === Math.floor(count / 10)}
            onClick={onNext}>
            Next
          </button>
        </section>
      )}
    </>
  );
};

export default StarwarsList;
