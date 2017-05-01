import { connect } from 'react-redux';
import Recommendation from '../../components/Recommendation/Recommendation';
import { clearClassSuggestions, fetchClassSuggestions,
    changeSuggestionSelected, changeClass } from '../../actions/recommendation';

const mapStateToProps = (state) => {
  const emojiDict = {
    Neutral: { text: '😐', hover: 'It was okay' },
    Difficult: { text: '💀', hover: 'It was difficult' },
    Love: { text: '😍', hover: 'Loved It' },
    Happy: { text: '😀', hover: 'Liked It' },
    Angry: { text: '😡', hover: 'Hated It' },
    Sad: { text: '🙁', hover: 'Disliked It' },
    Learning: { text: '🎓', hover: 'I learned a lot' },
    Easy: { text: '🤓', hover: 'It was easy' },
    Boring: { text: '😴', hover: 'It was boring' },
  };
  const tags = (!(state.recommendationReducer.recommendations.fetched) ? []
    : state.recommendationReducer.recommendations.recommendations.associated_tags);
  return {
    classSuggestions: state.recommendationReducer.classSuggestions.classSuggestions,
    name: state.recommendationReducer.classSuggestions.value,
    recommendations: state.recommendationReducer.recommendations.recommendations,
    recommendationFetched: state.recommendationReducer.recommendations.fetched,
    tags: tags.map(t => {
      if (t.category == 'user_history') {
        const emoji = emojiDict[t.name];
        emoji.id = t.id;
        emoji.name = emoji.text;
        return emoji;
      }
      return t;
    })
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeClassId: (text) => {
    dispatch(changeClass(text));
  },
  onSuggestionsClearRequested: () => {
    dispatch(clearClassSuggestions());
  },
  getSuggestionValue: (suggestion) => suggestion.catalogue_number,
  fetchClassSuggestions: (text) => {
    dispatch(fetchClassSuggestions(text));
  },
  onSuggestionSelected: (event, suggestion) => {
    dispatch(changeSuggestionSelected(suggestion));
  },
  onSuggestionsFetchRequested: (event) => {
    dispatch(fetchClassSuggestions(event.value));
  },
});

const VisibleRecommendation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommendation);

export default VisibleRecommendation;
