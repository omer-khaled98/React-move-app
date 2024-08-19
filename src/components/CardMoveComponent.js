import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToFavorites,
  removeFromFavorites,
} from "../Redux/Actions/FavAction";
import { selectIsFavorite } from "../Redux/selectors/favoritesSelectors";

export default function ({ img, title, movie, url }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => selectIsFavorite(state, movie.id));
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      setShowConfirmModal(true); // إظهار نافذة التأكيد
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  const confirmRemoveFavorite = () => {
    dispatch(removeFromFavorites(movie.id));

    setShowConfirmModal(false);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };
  const saveData = () => {
    localStorage.setItem("userData", JSON.stringify({ movie }));
  };

  return (
    <>
      {showAlert && (
        <div style={{ position: "absolute", zIndex: "1000", width: "250px" }}>
          <div className="alert alert-danger  " role="alert">
            تمت الازالة من المفضلة
          </div>
        </div>
      )}
      {/* نافذة التأكيد المنبثقة */}
      {showConfirmModal && (
        <div
          className="modal fade show text-white "
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog ">
            <div className="modal-content bg-dark">
              <div className="modal-header ">
                <h5 className="modal-title">تأكيد الإزالة</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowConfirmModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                هل أنت متأكد أنك تريد إزالة هذا الفيلم من المفضلة؟
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowConfirmModal(false)}
                >
                  إلغاء
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmRemoveFavorite}
                >
                  إزالة
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="card col-3"
        style={{
          border: "none",
          width: "250px",
          height: "300px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
        }}
      >
        <Link to={url} className="text-decoration-none">
          <img
            src={img}
            style={{ height: "200px" }}
            className="card-img-top"
            alt="..."
            onClick={saveData}
          />
        </Link>
        <div className="card-body position-relative text-center">
          <button
            onClick={handleFavoriteClick}
            className="border-0 btn-outline-danger me-2"
            style={{ backgroundColor: "transparent" }}
          >
            {isFavorite ? (
              <i
                className="fas fa-heart"
                style={{ color: "red", borderColor: "white" }}
              ></i>
            ) : (
              <i className="far fa-heart" style={{ color: "red" }}></i>
            )}
          </button>
          <h5 className="card-title d-inline">{title}</h5>
        </div>
      </div>
    </>
  );
}
