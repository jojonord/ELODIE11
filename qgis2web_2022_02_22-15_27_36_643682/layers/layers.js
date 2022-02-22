var wms_layers = [];

var format_17_Com_0 = new ol.format.GeoJSON();
var features_17_Com_0 = format_17_Com_0.readFeatures(json_17_Com_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17_Com_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17_Com_0.addFeatures(features_17_Com_0);
var lyr_17_Com_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_17_Com_0, 
                style: style_17_Com_0,
                interactive: true,
                title: '<img src="styles/legend/17_Com_0.png" /> 17_Com'
            });

lyr_17_Com_0.setVisible(true);
var layersList = [lyr_17_Com_0];
lyr_17_Com_0.set('fieldAliases', {'ID': 'ID', 'NOM_COM': 'NOM_COM', 'NOM_COM_M': 'NOM_COM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'INSEE_ARR': 'INSEE_ARR', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'NOM_REG': 'NOM_REG', 'INSEE_REG': 'INSEE_REG', 'InPoly_FID': 'InPoly_FID', 'SimPgnFlag': 'SimPgnFlag', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', });
lyr_17_Com_0.set('fieldImages', {'ID': '', 'NOM_COM': '', 'NOM_COM_M': '', 'INSEE_COM': '', 'STATUT': '', 'INSEE_ARR': '', 'NOM_DEP': '', 'INSEE_DEP': '', 'NOM_REG': '', 'INSEE_REG': '', 'InPoly_FID': '', 'SimPgnFlag': '', 'MaxSimpTol': '', 'MinSimpTol': '', });
lyr_17_Com_0.set('fieldLabels', {'ID': 'no label', 'NOM_COM': 'no label', 'NOM_COM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'INSEE_ARR': 'no label', 'NOM_DEP': 'no label', 'INSEE_DEP': 'no label', 'NOM_REG': 'no label', 'INSEE_REG': 'no label', 'InPoly_FID': 'no label', 'SimPgnFlag': 'no label', 'MaxSimpTol': 'no label', 'MinSimpTol': 'no label', });
lyr_17_Com_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});