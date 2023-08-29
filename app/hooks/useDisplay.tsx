import React from 'react'

const useDisplay = () => {

    const displayStatus = (status: string) => {
        switch (status) {
          case "PICKING":
            return (
              <div className="p-1 text-xs text-center bg-orange-200 rounded-md">
                ピッキング
              </div>
            );
          case "FACTORY":
            return (
              <div className="p-1 text-xs text-center bg-blue-200 rounded-md">
                工場
              </div>
            );
          case "PROCESSING":
            return (
              <div className="p-1 text-xs text-center bg-green-200 rounded-md">
                加工中
              </div>
            );
          case "SHIPPING":
            return (
              <div className="p-1 text-xs text-center bg-yellow-200 rounded-md">
                出荷
              </div>
            );
          case "FINISH":
            return (
              <div className="p-1 text-xs text-center bg-gray-200 rounded-md">
                完了
              </div>
            );
        }
      };
  return {displayStatus}
}

export default useDisplay