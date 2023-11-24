var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Ethiopia_1 = new ol.format.GeoJSON();
var features_Ethiopia_1 = format_Ethiopia_1.readFeatures(json_Ethiopia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ethiopia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ethiopia_1.addFeatures(features_Ethiopia_1);
var lyr_Ethiopia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ethiopia_1, 
                style: style_Ethiopia_1,
                interactive: false,
                title: '<img src="styles/legend/Ethiopia_1.png" /> Ethiopia'
            });
var format_Zone_2 = new ol.format.GeoJSON();
var features_Zone_2 = format_Zone_2.readFeatures(json_Zone_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone_2.addFeatures(features_Zone_2);
var lyr_Zone_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zone_2,
maxResolution:514.8800330676737,
 minResolution:64.36014415578997,

                style: style_Zone_2,
                interactive: false,
                title: '<img src="styles/legend/Zone_2.png" /> Zone'
            });
var format_Region_3 = new ol.format.GeoJSON();
var features_Region_3 = format_Region_3.readFeatures(json_Region_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region_3.addFeatures(features_Region_3);
var lyr_Region_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Region_3, 
                style: style_Region_3,
                interactive: true,
                title: '<img src="styles/legend/Region_3.png" /> Region '
            });
var format_ERCSHolding_4 = new ol.format.GeoJSON();
var features_ERCSHolding_4 = format_ERCSHolding_4.readFeatures(json_ERCSHolding_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ERCSHolding_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ERCSHolding_4.addFeatures(features_ERCSHolding_4);
var lyr_ERCSHolding_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ERCSHolding_4, 
                style: style_ERCSHolding_4,
                interactive: true,
                title: '<img src="styles/legend/ERCSHolding_4.png" /> ERCS Holding'
            });
var format_BuildingParcel_5 = new ol.format.GeoJSON();
var features_BuildingParcel_5 = format_BuildingParcel_5.readFeatures(json_BuildingParcel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuildingParcel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingParcel_5.addFeatures(features_BuildingParcel_5);
var lyr_BuildingParcel_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BuildingParcel_5, 
                style: style_BuildingParcel_5,
                interactive: true,
                title: '<img src="styles/legend/BuildingParcel_5.png" /> Building Parcel '
            });
var format_ERCSResourses_6 = new ol.format.GeoJSON();
var features_ERCSResourses_6 = format_ERCSResourses_6.readFeatures(json_ERCSResourses_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ERCSResourses_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ERCSResourses_6.addFeatures(features_ERCSResourses_6);cluster_ERCSResourses_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ERCSResourses_6
});
var lyr_ERCSResourses_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ERCSResourses_6, 
                style: style_ERCSResourses_6,
                interactive: true,
                title: '<img src="styles/legend/ERCSResourses_6.png" /> ERCS Resourses'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Ethiopia_1.setVisible(true);lyr_Zone_2.setVisible(true);lyr_Region_3.setVisible(true);lyr_ERCSHolding_4.setVisible(true);lyr_BuildingParcel_5.setVisible(true);lyr_ERCSResourses_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Ethiopia_1,lyr_Zone_2,lyr_Region_3,lyr_ERCSHolding_4,lyr_BuildingParcel_5,lyr_ERCSResourses_6];
lyr_Ethiopia_1.set('fieldAliases', {'NAME_ICRC': 'NAME_ICRC', 'ISO2': 'ISO2', 'ISO3': 'ISO3', 'NAME': 'NAME', 'ZONE_ICRC': 'ZONE_ICRC', 'REGION_ICR': 'REGION_ICR', 'DELEGATION': 'DELEGATION', 'DELEG_DESC': 'DELEG_DESC', 'OU': 'OU', 'OU_DESCR': 'OU_DESCR', 'COUNTRY': 'COUNTRY', 'COVERING': 'COVERING', 'COMMENT': 'COMMENT', 'ZONE_DES_1': 'ZONE_DES_1', 'REGION_DES': 'REGION_DES', 'NameICRC': 'NameICRC', 'Type': 'Type', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Zone_2.set('fieldAliases', {'ISO2': 'ISO2', 'shape_appr': 'shape_appr', 'As_of': 'As_of', 'Admin00Nam': 'Admin00Nam', 'Admin01Nam': 'Region ', 'Admin01Cod': 'Admin01Cod', 'Admin01Loc': 'Admin01Loc', 'Admin02Nam': 'Zone ', 'Admin02Loc': 'Admin02Loc', 'Admin02Cod': 'Admin02Cod', 'Admin02L_1': 'Admin02L_1', 'Admin01L_1': 'Admin01L_1', 'Comment': 'Comment', 'Admin02Sha': 'Admin02Sha', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Region_3.set('fieldAliases', {'Admin00Nam': 'Country ', 'Admin01Nam': 'Region ', 'Shape_Leng': 'Shape_Leng', });
lyr_ERCSHolding_4.set('fieldAliases', {'Entity_Nam': 'Entity Name ', 'ID': 'ID', 'ERCS_Regio': 'ERCS Region ', 'Zonal': 'Zone ', 'Woreda': 'Woreda ', 'Urban_Cent': 'Urban_Cent', 'Sub_City': 'Sub_City', 'Local_area': 'Locality ', 'Fence_avai': 'Fence_avai', 'Fence_cond': 'Fence_cond', 'Availabili': 'Title Deed', 'Year_of_ac': 'Year of Acquisition', 'Mode_of_ac': 'Mode_of_ac', 'Main_funct': 'Main_funct', 'Specific_f': 'Specific_f', 'Area_of_th': 'Area(m2)', 'Future_exp': 'Future_exp', 'The_locati': 'The_locati', 'Current_st': 'Current_st', 'Probabilit': 'Probabilit', 'Root_Cause': 'Root_Cause', 'Future_int': 'Future_int', 'Availablit': 'Availability of IGA', 'Types_of_I': 'Type of IGA', 'Probabil_1': 'Probabil_1', 'Root_cau_1': 'Root_cau_1', 'What_do_yo': 'What_do_yo', 'Remark_or_': 'Remark_or_', 'Name_of_Fi': 'First Contact ', 'Telephone_': 'Contact Number ', 'Second_Per': 'Second_Per', 'Telephone1': 'Telephone1', 'Shape_Area': 'Shape_Area', 'X_Center': 'X_Center', 'Y_Center': 'Y_Center', 'Admin01': 'Regional Admin ', 'Main_fun_1': 'Main Function ', 'Specific_1': 'Specific Function ', });
lyr_BuildingParcel_5.set('fieldAliases', {'Entity_nam': 'Entity Name ', 'Building_I': 'Building_I', 'Region_nam': 'ERCS Region ', 'Zonal_name': 'Zone ', 'Woreda_nam': 'Woreda ', 'Urban_cent': 'Urban Center ', 'Sub_city_n': 'Sub_city_n', 'Local_area': 'Locality ', 'Constructi': 'Year of Construction ', 'Number_of_': 'Number_of_', 'Number_of1': 'Number_of1', 'Number_o_1': 'Number_o_1', 'Total_room': 'Total Rooms', 'Building_f': 'Function ', 'Building_T': 'Building Type ', 'Building_H': 'Building Hight ', 'Building_C': 'Building_C', 'Construc_1': 'Construc_1', 'Current_Se': 'Current_Se', 'Avalablity': 'Avalability of IGA', 'Types_of_I': 'Type of IGA ', 'Best_futur': 'Best_futur', 'Any_risk_a': 'Any_risk_a', 'Remark_or_': 'Remark_or_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Area_m2': 'Area_m2', 'X_Center': 'X_Center', 'Y_Center': 'Y_Center', 'Admin01': 'Regional Adminstration ', });
lyr_ERCSResourses_6.set('fieldAliases', {'Entity_Nam': 'Entity Name ', 'ID': 'ID', 'Region_nam': 'ERCS Region ', 'Zonal_name': 'Zone', 'Woreda_nam': 'Woreda', 'Urban_cent': 'Urban Center', 'Sub_city_n': 'Sub_city_n', 'Local_area': 'Locality', 'Fence_avai': 'Fence_avai', 'Fence_cond': 'Fence_cond', 'Availabili': 'Title Deed', 'Year_of_ac': 'Year of Acquisition', 'Mode_of_ac': 'Mode_of_ac', 'Main_funct': 'Main_funct', 'Specific_f': 'Specific_f', 'Area_of_th': 'Area', 'Future_exp': 'Future_exp', 'The_locati': 'The_locati', 'Current_st': 'Current_st', 'Probabilit': 'Probabilit', 'Root_Cause': 'Root_Cause', 'Future_int': 'Future_int', 'Availablit': 'Availability of IGA', 'Types_of_I': 'Types of IGA', 'Probabil_1': 'Probabil_1', 'Root_cau_1': 'Root_cau_1', 'What_do_yo': 'What_do_yo', 'Remark_or_': 'Remark_or_', 'Name_of_Fi': 'Name_of_Fi', 'Telephone_': 'Contact Number', 'Second_Per': 'Second_Per', 'Telephone1': 'Telephone1', 'Shape_Area': 'Shape_Area', 'X_Center': 'X_Center', 'Y_Center': 'Y_Center', 'Admin01': 'Region', 'Main_fun_1': 'Main Function', 'Specific_1': 'Specific Function', 'ORIG_FID': 'ORIG_FID', });
lyr_Ethiopia_1.set('fieldImages', {'NAME_ICRC': 'TextEdit', 'ISO2': 'TextEdit', 'ISO3': 'TextEdit', 'NAME': 'TextEdit', 'ZONE_ICRC': 'TextEdit', 'REGION_ICR': 'TextEdit', 'DELEGATION': 'TextEdit', 'DELEG_DESC': 'TextEdit', 'OU': 'TextEdit', 'OU_DESCR': 'TextEdit', 'COUNTRY': 'TextEdit', 'COVERING': 'TextEdit', 'COMMENT': 'TextEdit', 'ZONE_DES_1': 'TextEdit', 'REGION_DES': 'TextEdit', 'NameICRC': 'TextEdit', 'Type': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Zone_2.set('fieldImages', {'ISO2': 'Hidden', 'shape_appr': 'Hidden', 'As_of': 'Hidden', 'Admin00Nam': 'Hidden', 'Admin01Nam': 'Hidden', 'Admin01Cod': 'Hidden', 'Admin01Loc': 'Hidden', 'Admin02Nam': 'TextEdit', 'Admin02Loc': 'Hidden', 'Admin02Cod': 'Hidden', 'Admin02L_1': 'Hidden', 'Admin01L_1': 'Hidden', 'Comment': 'Hidden', 'Admin02Sha': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Region_3.set('fieldImages', {'Admin00Nam': 'Hidden', 'Admin01Nam': 'TextEdit', 'Shape_Leng': 'Hidden', });
lyr_ERCSHolding_4.set('fieldImages', {'Entity_Nam': 'TextEdit', 'ID': 'Hidden', 'ERCS_Regio': 'TextEdit', 'Zonal': 'TextEdit', 'Woreda': 'TextEdit', 'Urban_Cent': 'TextEdit', 'Sub_City': 'Hidden', 'Local_area': 'TextEdit', 'Fence_avai': 'Hidden', 'Fence_cond': 'Hidden', 'Availabili': 'TextEdit', 'Year_of_ac': 'TextEdit', 'Mode_of_ac': 'Hidden', 'Main_funct': 'Hidden', 'Specific_f': 'Hidden', 'Area_of_th': 'TextEdit', 'Future_exp': 'Hidden', 'The_locati': 'Hidden', 'Current_st': 'Hidden', 'Probabilit': 'Hidden', 'Root_Cause': 'Hidden', 'Future_int': 'Hidden', 'Availablit': 'TextEdit', 'Types_of_I': 'TextEdit', 'Probabil_1': 'Hidden', 'Root_cau_1': 'Hidden', 'What_do_yo': 'Hidden', 'Remark_or_': 'Hidden', 'Name_of_Fi': 'TextEdit', 'Telephone_': 'TextEdit', 'Second_Per': 'Hidden', 'Telephone1': 'Hidden', 'Shape_Area': 'Hidden', 'X_Center': 'Hidden', 'Y_Center': 'Hidden', 'Admin01': 'Hidden', 'Main_fun_1': 'TextEdit', 'Specific_1': 'TextEdit', });
lyr_BuildingParcel_5.set('fieldImages', {'Entity_nam': 'TextEdit', 'Building_I': 'TextEdit', 'Region_nam': 'TextEdit', 'Zonal_name': 'TextEdit', 'Woreda_nam': 'TextEdit', 'Urban_cent': 'TextEdit', 'Sub_city_n': 'Hidden', 'Local_area': 'TextEdit', 'Constructi': 'TextEdit', 'Number_of_': 'Hidden', 'Number_of1': 'Hidden', 'Number_o_1': 'Hidden', 'Total_room': 'Range', 'Building_f': 'TextEdit', 'Building_T': 'TextEdit', 'Building_H': 'TextEdit', 'Building_C': 'Hidden', 'Construc_1': 'Hidden', 'Current_Se': 'Hidden', 'Avalablity': 'TextEdit', 'Types_of_I': 'TextEdit', 'Best_futur': 'Hidden', 'Any_risk_a': 'Hidden', 'Remark_or_': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Area_m2': 'TextEdit', 'X_Center': 'Hidden', 'Y_Center': 'Hidden', 'Admin01': 'Hidden', });
lyr_ERCSResourses_6.set('fieldImages', {'Entity_Nam': 'TextEdit', 'ID': 'Hidden', 'Region_nam': 'TextEdit', 'Zonal_name': 'TextEdit', 'Woreda_nam': 'TextEdit', 'Urban_cent': 'TextEdit', 'Sub_city_n': 'Hidden', 'Local_area': 'TextEdit', 'Fence_avai': 'Hidden', 'Fence_cond': 'Hidden', 'Availabili': 'TextEdit', 'Year_of_ac': 'TextEdit', 'Mode_of_ac': 'Hidden', 'Main_funct': 'Hidden', 'Specific_f': 'Hidden', 'Area_of_th': 'TextEdit', 'Future_exp': 'Hidden', 'The_locati': 'Hidden', 'Current_st': 'Hidden', 'Probabilit': 'Hidden', 'Root_Cause': 'Hidden', 'Future_int': 'Hidden', 'Availablit': 'TextEdit', 'Types_of_I': 'TextEdit', 'Probabil_1': 'Hidden', 'Root_cau_1': 'Hidden', 'What_do_yo': 'Hidden', 'Remark_or_': 'Hidden', 'Name_of_Fi': 'Hidden', 'Telephone_': 'TextEdit', 'Second_Per': 'Hidden', 'Telephone1': 'Hidden', 'Shape_Area': 'Hidden', 'X_Center': 'Hidden', 'Y_Center': 'Hidden', 'Admin01': 'Hidden', 'Main_fun_1': 'TextEdit', 'Specific_1': 'TextEdit', 'ORIG_FID': 'Hidden', });
lyr_Ethiopia_1.set('fieldLabels', {'NAME_ICRC': 'inline label', 'ISO2': 'inline label', 'ISO3': 'inline label', 'NAME': 'inline label', 'ZONE_ICRC': 'inline label', 'REGION_ICR': 'inline label', 'DELEGATION': 'inline label', 'DELEG_DESC': 'inline label', 'OU': 'inline label', 'OU_DESCR': 'inline label', 'COUNTRY': 'inline label', 'COVERING': 'inline label', 'COMMENT': 'inline label', 'ZONE_DES_1': 'inline label', 'REGION_DES': 'inline label', 'NameICRC': 'inline label', 'Type': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_Zone_2.set('fieldLabels', {'Admin02Nam': 'inline label', });
lyr_Region_3.set('fieldLabels', {'Admin01Nam': 'inline label', });
lyr_ERCSHolding_4.set('fieldLabels', {'Entity_Nam': 'inline label', 'ERCS_Regio': 'inline label', 'Zonal': 'no label', 'Woreda': 'inline label', 'Urban_Cent': 'inline label', 'Local_area': 'inline label', 'Availabili': 'inline label', 'Year_of_ac': 'inline label', 'Area_of_th': 'inline label', 'Availablit': 'inline label', 'Types_of_I': 'inline label', 'Name_of_Fi': 'inline label', 'Telephone_': 'inline label', 'Main_fun_1': 'inline label', 'Specific_1': 'inline label', });
lyr_BuildingParcel_5.set('fieldLabels', {'Entity_nam': 'inline label', 'Building_I': 'no label', 'Region_nam': 'no label', 'Zonal_name': 'no label', 'Woreda_nam': 'inline label', 'Urban_cent': 'inline label', 'Local_area': 'inline label', 'Constructi': 'inline label', 'Total_room': 'inline label', 'Building_f': 'inline label', 'Building_T': 'inline label', 'Building_H': 'inline label', 'Avalablity': 'inline label', 'Types_of_I': 'inline label', 'Area_m2': 'inline label', });
lyr_ERCSResourses_6.set('fieldLabels', {'Entity_Nam': 'inline label', 'Region_nam': 'inline label', 'Zonal_name': 'no label', 'Woreda_nam': 'inline label', 'Urban_cent': 'inline label', 'Local_area': 'inline label', 'Availabili': 'inline label', 'Year_of_ac': 'inline label', 'Area_of_th': 'inline label', 'Availablit': 'inline label', 'Types_of_I': 'inline label', 'Telephone_': 'inline label', 'Main_fun_1': 'inline label', 'Specific_1': 'inline label', });
lyr_ERCSResourses_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});