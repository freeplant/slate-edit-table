/** @jsx hyperscript */
import hyperscript from '../hyperscript';

export default (
    <document>
        <table>
            <table_row>
                <table_cell>
                    <paragraph>Col 0, Row 0</paragraph>
                </table_cell>
                <table_cell>
                    <paragraph>Col 1, Row 0</paragraph>
                </table_cell>
                <table_cell>
                    <paragraph>Col 2, Row 0</paragraph>
                </table_cell>
            </table_row>
            <table_row>
                <table_cell>
                    <paragraph>Col 0, Row 1</paragraph>
                </table_cell>
                <table_cell>
                    <paragraph>Col 1, Row 1</paragraph>
                </table_cell>
                <table_cell key="anchor">
                    <paragraph>Col 2, Row 1</paragraph>
                </table_cell>
            </table_row>
        </table>
    </document>
);
