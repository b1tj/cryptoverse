import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'
import { Col, Row, Typography } from 'antd'
import moment from 'moment'

const { Title } = Typography

ChartJS.register(...registerables)

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = []
    const coinTimestamp = []

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory.data.history[i].price)
        coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString())
    }
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0017bd',
                borderColor: '#0017bd',
            },
        ],
    }

    const options = {
        scales: {
            x: {
                beginAtZero: false,
            },
        },
    }

    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">
                    {coinName} Price Chart
                </Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">
                        {coinHistory?.data?.change}%
                    </Title>
                    <Title level={5} className="price-price">
                        Current {coinName} Price: $ {currentPrice}
                    </Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    )
}

export default LineChart
