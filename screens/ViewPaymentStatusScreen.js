import { View} from "react-native";
import ViewPaymnentStatus from "../components/ViewPaymentStatus/ViewPaymentStatus";
import ViewPaymentStatusTable from "../components/ViewPaymentStatus/ViewPaymentStatusTable";

 
function ViewPaymentStatusScreen(){
   return(
       <View>
        <ViewPaymnentStatus/>
        <ViewPaymentStatusTable/>
       </View>
   )
}
export default ViewPaymentStatusScreen;