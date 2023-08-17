/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/search', "N/ui/serverWidget"],
    /**
     * @param{search} search
     */
    (search, serverWidget) => {
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {
            try {


                if (scriptContext.type !== scriptContext.UserEventType.EDIT) {


                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_follett_retail')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_design')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_price_level')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_image_url')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_bn_sku')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_flc_sku')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_flc_retail')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_item_license_approved')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_follett_upc')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_follett_can_retail')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_fol_art')
                    hideColumnField(scriptContext.form, 'item', 'custcolcustcol_lf_fol_detail_art')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_rally_house_sku')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_rally_house_retail')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_mden_sku')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_mden_retail')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_ind_upc')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_sku')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_ind_retail')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_fanatics_sku')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_fanatics_venue_ret')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_royalty_exempt_item')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_has_note_check')
                    hideColumnField(scriptContext.form, 'item', 'quantitycommitted')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_rally_house_upc')
                    hideColumnField(scriptContext.form, 'item', 'isclosed')
                    hideColumnField(scriptContext.form, 'item', 'options')
                    hideColumnField(scriptContext.form, 'item', 'orderpriority')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_rally_house_vpn')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_fanatics_retail')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_aws_url')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_flc_sku')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_flc_retail')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_item_license_approved')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_fol_detail_art')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_fanatics_upc')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_rally_house_vpn')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_bpn')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_sps_color_info')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_upc')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_upccasecode')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_ean')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_gtin')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_itemstatuscode1')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_linesequencenumber')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_itemschedulequalifier1')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_itemscheduleqty1')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_itemscheduledate1')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_orderqtyuom')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_innerpack')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_outerpack')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_packsize')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_packuom')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_purchaseprice')
                    hideColumnField(scriptContext.form, 'item', 'custcol_sps_rtl_unitprice')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_rally_house_vpn')
                    hideColumnField(scriptContext.form, 'item', 'quantityonhand')
                    hideColumnField(scriptContext.form, 'item', 'quantityavailable"')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_logoed_overstock')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_price_level')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_style_name')
                    hideColumnField(scriptContext.form, 'item', 'quantitypickpackship')
                    hideColumnField(scriptContext.form, 'item', 'quantitybilled')
                    hideColumnField(scriptContext.form, 'item', 'quantityavailable')
                    hideColumnField(scriptContext.form, 'item', 'department')
                    hideColumnField(scriptContext.form, 'item', 'class')
                    hideColumnField(scriptContext.form, 'item', 'expectedshipdate')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_discount_percent')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_school_record')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_school_name')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_image_display')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_item_upc')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_olf_lf_upc')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_headwear')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_item_size')
                    hideColumnField(scriptContext.form, 'item', 'commitinventory')
                    hideColumnField(scriptContext.form, 'item', 'istaxable')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_image_link')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_item_color')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_rally_house_vpn')
                    hideColumnField(scriptContext.form, 'item', 'custcol2')
                    hideColumnField(scriptContext.form, 'item', 'custcol_scm_customerpartnumber')
                    hideColumnField(scriptContext.form, 'item', 'custcol_scm_itemsub_original_item')
                    hideColumnField(scriptContext.form, 'item', 'custcol_lf_all_assembly_inventory')


                }


            } catch (e) {
                log.error({
                    title: 'BeforLoad Error',
                    details: e
                });
            }

        }

        function hideColumnField(formObj, sublistId, fieldId) {

            try {
                const formSublist = formObj.getSublist({
                    id: sublistId
                });

                const formField = formSublist.getField({
                    id: fieldId
                });

                if (formField && typeof formField !== 'undefined' && formField !== null) {
                    formField.updateDisplayType({
                        displayType: serverWidget.FieldDisplayType.HIDDEN
                    });
                }

            } catch (error) {
                log.error({
                    title: 'Error occurred when hiding field',
                    details: error
                });
            }
        }

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const beforeSubmit = (scriptContext) => {

        }

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const afterSubmit = (scriptContext) => {

        }

        return {beforeLoad, beforeSubmit, afterSubmit}

    });
