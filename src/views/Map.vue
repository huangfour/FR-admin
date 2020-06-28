<template>
    <div>
        <div id="map"></div>
    </div>
</template>
<script>
    import {Scene, PointLayer} from '@antv/l7';
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
                },
                {
                    lng1:94.345,
                    lat1:35.455,
                },
                {
                    lng1:114.345,
                    lat1:30.455,
                },
                {
                    lng1:104.345,
                    lat1:24.455,
                },
            ]
            const scene = new Scene({
                id: 'map',
                map: new GaodeMap({
                    pitch: 0,
                    style: 'normal',
                    center: [104.435159, 34.256971],
                    zoom: 5.222,
                    // minZoom: 10
                })
            });
            const pointLayer=new PointLayer()
            .source(data,{
                parser:{
                    type:'json',
                    x:'lng1',
                    y:'lat1',
                }
            })
                .shape('circle')
                .color('#cc0000')
                .size(10)

            scene.addLayer(pointLayer);
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