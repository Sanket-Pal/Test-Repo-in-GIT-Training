/**
 /**
 * @NApiVersion 2.1
 * @NScriptType MassUpdateScript
 */
define(['N/record', 'N/search'],
    /**
 * @param{record} record
 * @param{search} search
 */
    (record, search) => {
        /**
         * Defines the Mass Update trigger point.
         * @param {Object} params
         * @param {string} params.type - Record type of the record being processed
         * @param {number} params.id - ID of the record being processed
         * @since 2016.1
         */
        function each(params) {
            const Salesordermemo = record.load({
                type: params.type,
                id: params.id
            });
            Salesordermemo.setValue(
                {
                    fieldId: 'memo',
                    value: 'Memo updated for previous month'
                });
            Salesordermemo.save();
        }
        return { each }

    });
