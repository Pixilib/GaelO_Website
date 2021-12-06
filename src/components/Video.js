import {Row, Col, Carousel} from "react-bootstrap";
import { useTranslation } from "react-i18next";


function getStyleVideo() {
    return {
        color: "#353275"
    };
}
function Video() {

    const { t } = useTranslation();
    
   
    return (
        <Row id="videos" className="bg-light pt-5 text-center border-top" style={getStyleVideo()}>
            <h3>{t('videos.title')}</h3>
            <Col md={6} className="styleCarouselVideo text-center align-items-center">
                <Carousel className="p-5" variant="dark">
                    <Carousel.Item>
                        <h4>{t('videos.carousel-legend.0')}</h4>
                        <iframe width="750" height="422" src="https://www.youtube.com/embed/Fv6NqLQxhxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h4>{t('videos.carousel-legend.1')}</h4>
                        <iframe width="750" height="422" src="https://www.youtube.com/embed/MflJzcJGfcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h4>{t('videos.carousel-legend.2')}</h4>
                        <iframe width="750" height="422" src="https://www.youtube.com/embed/DgUVM1QMppw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h4>{t('videos.carousel-legend.3')}</h4>
                        <iframe width="750" height="422" src="https://www.youtube.com/embed/XwGKjJfEodc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h4>{t('videos.carousel-legend.4')}</h4>
                        <iframe width="750" height="422" src="https://www.youtube.com/embed/GZKJaySwvZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h4>{t('videos.carousel-legend.5')}</h4>
                        <iframe width="750" height="422" src="https://www.youtube.com/embed/jR5I4wb6nlE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h4>{t('videos.carousel-legend.6')}</h4>
                        <iframe width="750" height="422" src="https://www.youtube.com/embed/edZCWORteI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Carousel.Item>
                </Carousel>
            </Col>
            
        </Row>
    );
  }
  
  export default Video;