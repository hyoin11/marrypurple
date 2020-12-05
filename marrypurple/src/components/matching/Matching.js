import React from 'react';
import '../../lib/styles/matching.scss';
import MatchingItem from './pieces/MatchingItem';
import Error from './pieces/error'
import { BiExitFullscreen } from 'react-icons/bi';

const Matching = ({onClickReport, urlAddress, matching, error, loading, onToggle, onToggle_report, showProfile, back}) => {
  if(error){
      console.log(error)
      return<div><Error/></div>
  }
  return (
    <>
      {!loading && matching && (
            <div>
                {matching.map(list => (
                    <MatchingItem 
                      list={list} 
                      onToggle={onToggle} 
                      showProfile={showProfile} 
                      onToggle_report={onToggle_report}
                      key={list._id}
                      urlAddress= {urlAddress}
                      onClickReport={onClickReport}
                    />
                ))}
            </div>
      )}
      {!loading && back && (
        <div>
          <MatchingItem
            list={back} 
            onToggle={onToggle} 
            showProfile={showProfile} 
            onToggle_report={onToggle_report}
            key={back._id}
            urlAddress= {urlAddress}
            onClickReport={onClickReport}
            />
        </div>
      )}
    </>
  );
};

export default Matching;
