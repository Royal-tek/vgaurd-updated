<template>
    <div>
      <svg ref="svgContainer" :width="stateSize[0]" :height="stateSize[1]">
        <g v-for="(feature, index) in imoGeoJson.features" :key="index">
          <path :d="getPath(feature)" :fill="defaultColor" :stroke="strokeColor" />
        </g>
      </svg>
    </div>
  </template>
  
  <script>
  import { geoEquirectangular, geoPath } from "d3";
  import imoGeoJson from "../assets/lga_boundaries_enoch.json";
  
  export default {
    data() {
      return {
        strokeColor: "#525252",
        defaultColor: "#0F262E",
        imoGeoJson: imoGeoJson,
        projection: null,
        geoPathGenerator: null,
      };
    },
    props: {
      stateSize: {
        type: Array,
        required: true,
      },
    },
    created() {
      this.projection = geoEquirectangular().fitSize(this.stateSize, this.imoGeoJson);
      this.geoPathGenerator = geoPath().projection(this.projection);
    },
    methods: {
      getPath(feature) {
        return this.geoPathGenerator(feature);
      },
      isMatchLGA(source, target) {
        return source.name === target.name;
      },
    },
  };
  </script>
  