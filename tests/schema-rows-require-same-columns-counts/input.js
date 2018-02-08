/** @jsx hyperscript */
import hyperscript from '../hyperscript';

export default (
    <document>
        <table presetAlign={['left', 'left', 'left']}>
            <table_row>
                <table_cell>
                    <paragraph>Row 1, Col 1</paragraph>
                </table_cell>
                <table_cell>
                    <paragraph>Row 1, Col 2</paragraph>
                </table_cell>
                <table_cell>
                    <paragraph>Row 1, Col 3</paragraph>
                </table_cell>
            </table_row>
            <table_row>There is no columns here</table_row>
            <table_row>
                <table_cell>
                    <paragraph>Row 3, Col 1</paragraph>
                </table_cell>
                <block type="invalid">Row 3, Col 2</block>
                <table_cell>
                    <paragraph>Row 3, Col 3</paragraph>
                </table_cell>
            </table_row>
        </table>
    </document>
);
