import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newsRequest } from '../../store/actions/news';

export interface Props {
    newsRequest: Function;
    mynews: [];
}

const News = ({ newsRequest, mynews }: Props) => {
    useEffect(() => {
        newsRequest();
    }, []);

    return (
        <ul>
            {mynews.map((news: { id: number; title: string }) => {
                return (
                    <li key={news.id}>
                        {news.id}. {news.title}
                        <hr />
                    </li>
                );
            })}
        </ul>
    );
};

const mapStateToProps = (state: any) => ({
    mynews: state.newsReducer.mynews,
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            newsRequest,
        },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(News);
