import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../store/votes'

const mapDispatchToProps = { increment };

function VotesCounter(props) {
  console.log(props);

  const voteForCandidate = (name) => {
    props.increment(name);
  }
  return(
    <div id="votes-counter">
      {props.banana.candidates.map((candidate, idx) => (
        <div key={idx}>
          <p>Name: {candidate.name} has {candidate.votes}</p>
          <button onClick={() => voteForCandidate(candidate.name)}>vote for this candidate</button>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  banana: state.counter,
})

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);