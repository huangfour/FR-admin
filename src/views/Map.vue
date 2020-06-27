<template>
    <div>
        <div id="map"></div>
    </div>
</template>
<script>
    import {Scene, LineLayer} from '@antv/l7';
    import {GaodeMap} from '@antv/l7-maps';

    export default {
        data() {
            return {};
        },
        mounted() {
            const data = [
                {
                    lng1:116.345,
                    lat1:39.455,
                    lng2:94.345,
                    lat2:35.455,
                },
                {
                    lng1:116.345,
                    lat1:39.455,
                    lng2:113.345,
                    lat2:27.455,
                },
            ]
            const scene = new Scene({
                id: 'map',
                map: new GaodeMap({
                    pitch: 0,
                    style: 'normal',
                    center: [104.435159, 34.256971],
                    zoom: 4.444,
                    // minZoom: 10
                })
            });
            const lineLayer=new LineLayer()
            .source(data,{
                parser:{
                    type:'json',
                    x:'lng1',
                    y:'lat1',
                    x1:'lng2',
                    y1:'lat2'
                }
            })
                .shape('arc')
                .color('#cc0000')
                .animate({
                    duration:4,
                    interval:0,
                    trailLength:1
                })

            scene.addLayer(lineLayer);
        }
    };
</script>
<style>
    ::-webkit-scrollbar {
        display: none;
    }

    html,
    body {
        overflow: hidden;
        margin: 0;
    }

    #map {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }
</style>