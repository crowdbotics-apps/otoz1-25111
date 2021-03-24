import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_1_261}>
        <View style={styles.View_1_262} />
        <View style={styles.View_1_263} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61ba/4209/0c710feefe7f19610db241031b103839"
          }}
          style={styles.ImageBackground_1_264}
        />
      </View>
      <View style={styles.View_1_266}>
        <Text style={styles.Text_1_266}>Profile</Text>
      </View>
      <View style={styles.View_1_267}>
        <View style={styles.View_1_268} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6900/ea6a/e79e9f47717141e3df5e4f36944848db"
          }}
          style={styles.ImageBackground_1_269}
        />
      </View>
      <View style={styles.View_1_270}>
        <Text style={styles.Text_1_270}>Fahim Ekan</Text>
      </View>
      <View style={styles.View_1_271}>
        <View style={styles.View_1_272}>
          <View style={styles.View_1_273} />
          <View style={styles.View_1_274} />
          <View style={styles.View_1_275} />
        </View>
        <View style={styles.View_1_276}>
          <View style={styles.View_1_277}>
            <Text style={styles.Text_1_277}>A+</Text>
          </View>
          <View style={styles.View_1_278}>
            <Text style={styles.Text_1_278}>Blood Type</Text>
          </View>
        </View>
        <View style={styles.View_1_279}>
          <View style={styles.View_1_280}>
            <Text style={styles.Text_1_280}>05</Text>
          </View>
          <View style={styles.View_1_281}>
            <Text style={styles.Text_1_281}>Donated</Text>
          </View>
        </View>
        <View style={styles.View_1_282}>
          <View style={styles.View_1_283}>
            <Text style={styles.Text_1_283}>02</Text>
          </View>
          <View style={styles.View_1_284}>
            <Text style={styles.Text_1_284}>Requested</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1_285}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2710/a2bf/f5fe81889a231e859227dd664c6c706c"
          }}
          style={styles.ImageBackground_1_286}
        />
      </View>
      <View style={styles.View_1_289}>
        <View style={styles.View_1_290} />
        <View style={styles.View_1_291} />
        <View style={styles.View_1_292} />
        <View style={styles.View_1_293} />
        <View style={styles.View_1_294}>
          <Text style={styles.Text_1_294}>Available for donate</Text>
        </View>
        <View style={styles.View_1_295}>
          <Text style={styles.Text_1_295}>Invite a friend</Text>
        </View>
        <View style={styles.View_1_296}>
          <Text style={styles.Text_1_296}>Get help</Text>
        </View>
        <View style={styles.View_1_297}>
          <Text style={styles.Text_1_297}>Sign out</Text>
        </View>
        <View style={styles.View_1_298} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab10/4807/9e195962fdbb32539b8d094e70dc298b"
          }}
          style={styles.ImageBackground_1_299}
        />
      </View>
      <View style={styles.View_1_300}>
        <View style={styles.View_1_301}>
          <View style={styles.View_1_302} />
          <View style={styles.View_1_303}>
            <View style={styles.View_1_304}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d7c/a4bf/a0f7423355377554960f1f97927b5ce1"
                }}
                style={styles.ImageBackground_1_305}
              />
            </View>
            <View style={styles.View_1_309}>
              <Text style={styles.Text_1_309}>Call Now</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_310}>
          <View style={styles.View_1_311} />
          <View style={styles.View_1_312}>
            <View style={styles.View_1_313}>
              <View style={styles.View_1_314}>
                <Text style={styles.Text_1_314}>Request</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d6e/108c/3117b7ed9c25ac5a3b362c4e2d70d723"
                }}
                style={styles.ImageBackground_1_315}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_317}>
        <View style={styles.View_1_318}>
          <Text style={styles.Text_1_318}>Chittagong, Bangladesh</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5a3/65f4/e04de3c56313b59363533270829d5347"
          }}
          style={styles.ImageBackground_1_319}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/716e/dc74/2142c388c164a44b709b5a1da8c1ae43"
        }}
        style={styles.ImageBackground_1_322}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_261: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 38
  },
  View_1_262: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1_263: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.71014492753623%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1_264: {
    width: wp("7.246376811594203%"),
    height: 30,
    top: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6908212560386469%")
  },
  View_1_266: {
    width: wp("45.65217391304348%"),
    minWidth: wp("45.65217391304348%"),
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.294685990338163%"),
    top: 43
  },
  Text_1_266: {
    color: "rgba(39, 42, 47, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.44,
    textTransform: "none"
  },
  View_1_267: {
    width: wp("24.879227053140095%"),
    minWidth: wp("24.879227053140095%"),
    height: 103,
    minHeight: 103,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.68115942028986%"),
    top: 92
  },
  View_1_268: {
    width: wp("24.879227053140095%"),
    minWidth: wp("24.879227053140095%"),
    height: 103,
    minHeight: 103,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1_269: {
    width: wp("21.62764728933141%"),
    minWidth: wp("21.62764728933141%"),
    height: 89.53845977783203,
    minHeight: 89.53845977783203,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.690821256038646%"),
    top: 7
  },
  View_1_270: {
    width: wp("64.00966183574879%"),
    minWidth: wp("64.00966183574879%"),
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.115942028985508%"),
    top: 240
  },
  Text_1_270: {
    color: "rgba(39, 42, 47, 1)",
    fontSize: 24,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 1.05,
    textTransform: "none"
  },
  View_1_271: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: 102,
    minHeight: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 446
  },
  View_1_272: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: 102,
    minHeight: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_1_273: {
    width: wp("24.637681159420293%"),
    minWidth: wp("24.637681159420293%"),
    height: 102,
    minHeight: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_274: {
    width: wp("24.154589371980677%"),
    minWidth: wp("24.154589371980677%"),
    height: 102,
    minHeight: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.091787439613526%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_275: {
    width: wp("24.637681159420293%"),
    minWidth: wp("24.637681159420293%"),
    height: 102,
    minHeight: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.70048309178745%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_276: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    height: 74,
    minHeight: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: 14
  },
  View_1_277: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971016%"),
    top: 0
  },
  Text_1_277: {
    color: "rgba(39, 42, 47, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_1_278: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 53
  },
  Text_1_278: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_1_279: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    height: 74,
    minHeight: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.507246376811594%"),
    top: 14
  },
  View_1_280: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057971016%"),
    top: 0
  },
  Text_1_280: {
    color: "rgba(39, 42, 47, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_1_281: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 53
  },
  Text_1_281: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_1_282: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    height: 74,
    minHeight: 74,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.59903381642512%"),
    top: 14
  },
  View_1_283: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6231884057970944%"),
    top: 0
  },
  Text_1_283: {
    color: "rgba(39, 42, 47, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_1_284: {
    width: wp("19.32367149758454%"),
    minWidth: wp("19.32367149758454%"),
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 53
  },
  Text_1_284: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_1_285: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.95652173913044%"),
    top: 48,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_286: {
    width: wp("4.860222397219156%"),
    height: 20.121320724487305,
    top: 1.878692626953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.483091787439605%")
  },
  View_1_289: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: 262,
    minHeight: 262,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: 603
  },
  View_1_290: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: 55,
    minHeight: 55,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_291: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: 55,
    minHeight: 55,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 69,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_292: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: 55,
    minHeight: 55,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 138,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_293: {
    width: wp("90.33816425120773%"),
    minWidth: wp("90.33816425120773%"),
    height: 55,
    minHeight: 55,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 207,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_294: {
    width: wp("47.82608695652174%"),
    minWidth: wp("47.82608695652174%"),
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: 15
  },
  Text_1_294: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_1_295: {
    width: wp("47.82608695652174%"),
    minWidth: wp("47.82608695652174%"),
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: 84
  },
  Text_1_295: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_1_296: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: 153
  },
  Text_1_296: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_1_297: {
    width: wp("21.256038647342994%"),
    minWidth: wp("21.256038647342994%"),
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: 222
  },
  Text_1_297: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.32,
    textTransform: "none"
  },
  View_1_298: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.8792270531401%"),
    top: 18,
    backgroundColor: "rgba(255, 33, 86, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  ImageBackground_1_299: {
    width: wp("3.3816425120772946%"),
    minWidth: wp("3.3816425120772946%"),
    height: 14,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.1256038647343%"),
    top: 21
  },
  View_1_300: {
    width: wp("84.29951690821255%"),
    minWidth: wp("84.29951690821255%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753622%"),
    top: 351
  },
  View_1_301: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_1_302: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(104, 149, 147, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_303: {
    width: wp("27.536231884057973%"),
    minWidth: wp("27.536231884057973%"),
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.31400966183575%"),
    top: 13
  },
  View_1_304: {
    width: wp("6.280193236714976%"),
    minWidth: wp("6.280193236714976%"),
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_305: {
    width: wp("5.338230225199086%"),
    height: 22.10040283203125,
    top: 2.5999984741210938,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6280134265549524%")
  },
  View_1_309: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.386473429951689%"),
    top: 1
  },
  Text_1_309: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_310: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13526570048309%"),
    top: 0
  },
  View_1_311: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 33, 86, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_312: {
    width: wp("27.536231884057973%"),
    minWidth: wp("27.536231884057973%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3140096618357475%"),
    top: 14
  },
  View_1_313: {
    width: wp("27.536231884057973%"),
    minWidth: wp("27.536231884057973%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_1_314: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.386473429951685%"),
    top: 0
  },
  Text_1_314: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_315: {
    width: wp("6.07315284618433%"),
    height: 22,
    top: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_317: {
    width: wp("55.072463768115945%"),
    minWidth: wp("55.072463768115945%"),
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.463768115942027%"),
    top: 287
  },
  View_1_318: {
    width: wp("49.275362318840585%"),
    minWidth: wp("49.275362318840585%"),
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275363%"),
    top: 0
  },
  Text_1_318: {
    color: "rgba(124, 124, 124, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.6300000000000001,
    textTransform: "none"
  },
  ImageBackground_1_319: {
    width: wp("3.864734299516908%"),
    height: 16,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_322: {
    width: wp("5.797101449275362%"),
    height: 24,
    top: 826,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.54106280193237%")
  },
  View_2: { height: 896 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
